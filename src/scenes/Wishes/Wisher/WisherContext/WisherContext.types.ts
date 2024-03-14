import { ItemMeta } from '@hooks/use-contentful';

export type NewWish = {
  sender: string;
  message: string;
};

export type Wish = NewWish & ItemMeta;

export type WisherError = null | {
  message: string;
};

export type WisherState = {
  wish: NewWish;
  isValid: boolean;
  isSending: boolean;
  isSuccess: boolean;
};

export type WisherContextType = {
  error: WisherError;
  state: WisherState;
  reset: () => void;
  handleChange: (field: keyof NewWish, value: string) => void;
  handleSend: () => void;
};
