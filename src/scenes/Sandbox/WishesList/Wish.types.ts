import { Listful } from '@hooks/use-contentful/use-contentful.types';

export type Wish = {
  id: string;
  sender: string;
  message: string;
};

export type WishItemProps = {
  data: Wish;
  listful: Listful<Wish>;
};
