import { Res, Err } from '../contentful.types';
import {
  config,
  timeoutSignal,
  handleTimeoutErr,
  handleUnknownErr,
} from '../contentful-helpers';

const readEntries = async <T>(endpoint: string): Promise<Res<T[]>> => {
  const urlEndpoint = `${config.apiBaseUrl}/${endpoint}`;

  try {
    const res = await fetch(urlEndpoint, {
      method: 'GET',
      signal: timeoutSignal(),
      headers: { 'X-API-Key': config.apiKey },
    });

    // Bad response
    if (!res.ok) {
      const errMsg = `API Error: ${res.status} - ${res.statusText}`;
      return handleUnknownErr(new Err(errMsg, res.status, 'APIErr'));
    }

    // Good response
    const data = (await res.json()) as Promise<T[]>;

    return data;
  } catch (err) {
    if (err.name === 'AbortError') return handleTimeoutErr(err);
    return handleUnknownErr(err);
  }
};

export default readEntries;
