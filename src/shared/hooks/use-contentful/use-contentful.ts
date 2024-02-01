import { useState, useEffect, useCallback } from 'react';
import contentfulService from '@services/contentful';
import logger from '@services/logger';
import { Err } from '@services/contentful/contentful.types';
import pollForChanges from './poll-for-changes';

import {
  WithId,
  ListfulAddFn,
  ListfulRemoveFn,
  UseContentfulReturn,
} from './use-contentful.types';

const useContentful = <T extends WithId>(
  listEndpoint: string,
): UseContentfulReturn<T> => {
  const service = contentfulService<T>();

  // Hook state
  const [data, setData] = useState<T[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Error handler
  const handleErr = (err: Err) => {
    switch (err.type) {
      case 'NetworkErr':
        logger.warn(err);
        break;
      case 'APIErr':
        logger.error(err);
        setError(err.message);
        break;
      case 'UnknownErr':
        logger.error(err);
        setError(err.message);
        break;
      default:
    }
  };

  // Loading state
  const showUpdating = () => {
    setIsLoading(true);
    setError('');
  };

  // Add an item locally and create it
  const listfulAdd: ListfulAddFn<T> = useCallback(async (item) => {
    showUpdating();

    try {
      const res = await service.create(listEndpoint, item);

      if (res instanceof Err) {
        handleErr(res);
        return false;
      }

      // Use new item response to add to local data
      const createdItem = res as T;
      setData((prevData) => [...(prevData ?? []), createdItem]);

      const hasId = ({ id }: { id: string }) => id === createdItem.id;

      pollForChanges({
        serviceFn: () => service.read(listEndpoint),
        conditionCheck: (fetched: T[]) => fetched.some(hasId),
        handleErr,
        setData,
      });
    } catch (err) {
      handleErr(err);
    } finally {
      setIsLoading(false);
      return true;
    }
  }, []);

  // Remove an idea locally and delete it
  const listfulRemove: ListfulRemoveFn = useCallback(async (itemId) => {
    showUpdating();

    try {
      const res = await service.delete(`${listEndpoint}/${itemId}`);

      if (res instanceof Err) {
        handleErr(res);
        return false;
      }

      // Use delete confirmation to remove from local data
      setData((prevData) =>
        prevData ? prevData.filter(({ id }) => id !== itemId) : null,
      );

      const hasId = ({ id }: { id: string }) => id === itemId;

      pollForChanges({
        serviceFn: () => service.read(listEndpoint),
        conditionCheck: (fetched: T[]) => !fetched.some(hasId),
        handleErr,
        setData,
      });
    } catch (err) {
      handleErr(err);
    } finally {
      setIsLoading(false);
      return true;
    }
  }, []);

  // Fetch collection data
  const fetchData = useCallback(async () => {
    showUpdating();

    try {
      const res = await service.read(listEndpoint);

      if (res instanceof Err) {
        handleErr(res);
        return false;
      }

      // Fetched array
      setData(res as T[]);
    } catch (err) {
      handleErr(err);
    } finally {
      setIsLoading(false);
      return true;
    }
  }, [listEndpoint]);

  // Fetch effect
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Hook return
  const listful = { add: listfulAdd, remove: listfulRemove };
  return { data, isLoading, error, listful };
};

export default useContentful;
