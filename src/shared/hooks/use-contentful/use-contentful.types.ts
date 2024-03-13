export type WithId = { id: string };

export type ListfulAddFn<T> = (item: T) => void;
export type ListfulRemoveFn = (itemId: string) => void;

export type Listful<T extends WithId> = {
  add: ListfulAddFn<T>;
  remove: ListfulRemoveFn;
};

export type UseContentfulReturn<T extends WithId> = {
  data: T[] | undefined;
  listful: Listful<T>;
  isLoading: boolean;
  error: null | { message: string };
};
