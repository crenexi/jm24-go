import { Dispatch, SetStateAction } from 'react';
import logger from '@services/logger';
import { Err } from '@services/contentful/contentful.types';

/**
 * `pollForChanges` is an asynchronous utility function for polling data changes.
 * It repeatedly executes a provided service function until a specified condition is met or a maximum number of attempts is reached.
 *
 * @param {PollForChangesOpts<T>} opts - The options object containing all necessary parameters.
 *   - serviceFn: A function returning a promise that fetches the data.
 *   - conditionCheck: A function that checks if the polled condition is met.
 *   - handleErr: A function to handle any errors that occur during polling.
 *   - setData: A React dispatch function to update the state with the fetched data.
 *   - maxAttempts: (Optional) Maximum number of polling attempts. Default is 5.
 *   - pollInterval: (Optional) Time interval (in milliseconds) between polling attempts. Default is 3000 ms.
 *
 * @returns A cleanup function that clears the polling interval.
 */
type PollForChangesOpts<T> = {
  serviceFn: () => Promise<T[] | Err>;
  conditionCheck: (data: T[]) => boolean;
  handleErr: (err: Err) => void;
  setData: Dispatch<SetStateAction<T[] | null>>;
  maxAttempts?: number;
  pollInterval?: number;
};

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let inDebounce: ReturnType<typeof setTimeout>;
  return function (...args: any[]) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), delay);
  };
};

const pollForChanges = async <T extends { id: string }>(
  opts: PollForChangesOpts<T>,
) => {
  const {
    serviceFn,
    conditionCheck,
    handleErr,
    setData,
    maxAttempts = 7,
    pollInterval = 5000,
  } = opts;

  let attempts = 0;

  const poll = async () => {
    try {
      const res = await serviceFn();

      if (res instanceof Err) {
        handleErr(res);
        return;
      }

      const data = res as T[];

      if (conditionCheck(data) || attempts >= maxAttempts) {
        clearInterval(interval);
        setData(data);
      }
    } catch (error) {
      clearInterval(interval);
      handleErr(error);
    }

    attempts++;
  };

  const debouncedPoll = debounce(poll, pollInterval);
  const interval = setInterval(debouncedPoll, pollInterval);

  return () => clearInterval(interval);
};

export default pollForChanges;
