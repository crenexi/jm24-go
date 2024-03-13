import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import contentfulService from '@services/contentful';
import logger from '@services/logger';
import { Err } from '@services/contentful/contentful.types';
import { WithId, UseContentfulReturn } from './use-contentful.types';
import pollForChanges from './poll-for-changes';

const useContentful = <T extends WithId>(
  endpoint: string,
): UseContentfulReturn<T> => {
  const ep = endpoint;
  const service = contentfulService<T>();
  const queryClient = useQueryClient();

  // Custom error state
  const [error, setError] = useState<null | { message: string }>(null);

  // Custom error handling
  const handleErr = (err: Err) => {
    switch (err.type) {
      case 'NetworkErr':
        logger.warn(err);
        break;
      case 'APIErr':
        logger.error(err);
        setError({ message: err.message });
        break;
      case 'UnknownErr':
        logger.error(err);
        setError({ message: err.message });
        break;
      default:
    }
  };

  // Fetch and manage data
  const { data, isLoading } = useQuery<T[], Error>(
    [ep],
    () => service.read(ep),
    {
      staleTime: 5 * 60 * 1000, // freshen data in 5m
      cacheTime: 15 * 60 * 1000, // garbage unused data in 15m
      refetchOnWindowFocus: true, // refetch on window focus
      onError: (err) => handleErr(err as Err),
    },
  );

  // Helper for polling
  const startPolling = (successFn: (fetched: T[]) => boolean) => {
    pollForChanges<T>({
      successFn,
      maxAttempts: 10,
      pollInterval: 7000,
      serviceFn: () => service.read(ep),
      onSuccess: () => queryClient.invalidateQueries([ep]),
      onError: (err) => {
        setError({
          message: `Error during polling for changes: ${err.message}`,
        });
      },
    });
  };

  // Mutations: add item to data
  const createFn = (newItem: T) => service.create(ep, newItem);
  const addMutation = useMutation(createFn, {
    onMutate: async (newItem: T) => {
      // Prevent ongoing fetches and save items
      await queryClient.cancelQueries([ep]);
      const previousItems = queryClient.getQueryData<T[]>([ep]) ?? [];

      // Optimistically update data and return previous
      queryClient.setQueryData<T[]>([ep], (old = []) => [...old, newItem]);
      return { previousItems };
    },
    onError: (err, newItem, context: any) => {
      if (context?.previousItems) {
        queryClient.setQueryData([ep], context.previousItems);
      }
    },
    onSuccess: (resData) => {
      if (!resData?.id) logger.warn('No ID was returned from new post');
    },
    onSettled: (resData) => {
      // Poller: checks to see when the new item is included in Contentful
      startPolling((fetched: T[]) => {
        return fetched.some((item) => item.id === (resData as T).id);
      });
    },
  });

  // Mutation: remove item from data
  const deleteFn = (id: string) => service.delete(`${ep}/${id}`);
  const removeMutation = useMutation(deleteFn, {
    onMutate: async (id: string) => {
      // Prevent ongoing fetches and save items
      await queryClient.cancelQueries([ep]);
      const previousItems = queryClient.getQueryData<T[]>([ep]) ?? [];

      // Optimistically update data and return previous
      queryClient.setQueryData<T[]>([ep], (old = []) => {
        return old.filter((item) => item.id !== id);
      });

      return { previousItems, id };
    },
    onError: (err, context: any) => {
      if (context?.previousItems) {
        queryClient.setQueryData([ep], context.previousItems);
      }
    },
    onSettled: (resData, error, variables, context) => {
      // Poller: checks to see when item is removed in Contentful
      startPolling((fetched: T[]) => {
        return !fetched.some((item) => item.id === context?.id);
      });
    },
  });

  // Hook return
  const listful = {
    add: (item: T) => addMutation.mutate(item),
    remove: (id: string) => removeMutation.mutate(id),
  };

  return { data, isLoading, error, listful };
};

export default useContentful;
