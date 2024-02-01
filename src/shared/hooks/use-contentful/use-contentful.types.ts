export type WithId = {
  id: string;
};

export type ListfulAddFn<T extends WithId> = (
  item: Omit<T, 'id'>,
) => Promise<boolean>;

export type ListfulRemoveFn = (itemId: string) => Promise<boolean>;

export type Listful<T extends WithId> = {
  add: ListfulAddFn<T>;
  remove: ListfulRemoveFn;
};

export type UseContentfulReturn<T extends WithId> = {
  data: T[] | null;
  listful: Listful<T>;
  isLoading: boolean;
  error: string;
};
