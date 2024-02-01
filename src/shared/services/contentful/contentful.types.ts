// ## Data ####################################################################

export type ContentfulConfig = {
  apiBaseUrl: string;
  apiKey: string;
};

// ## Error ###################################################################

type ErrType = 'NetworkErr' | 'APIErr' | 'UnknownErr';
export class Err extends Error {
  status: number;

  type: ErrType;

  constructor(message: string, status: number, type: ErrType) {
    super(message);
    this.status = status;
    this.type = type;
  }
}

export type Res<T> = T | Err;

// ## Helpers #################################################################

export type TimeoutSignalFn = (ms?: number) => AbortSignal;
export type HandleTimeoutErrFn = (err: Err) => Err;
export type HandleUnknownErrFn = (err: Err) => Err;

// ## Service #################################################################

type ReadFn<T> = (endpoint: string) => Promise<Res<T[]>>;
type CreateFn<T> = (endpoint: string, data: object) => Promise<Res<T>>;
type DeleteFn<T> = (endpoint: string) => Promise<Res<T>>;

export type ContentfulService<T> = {
  read: ReadFn<T>;
  create: CreateFn<T>;
  delete: DeleteFn<T>;
};
