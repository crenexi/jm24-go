import { ReactNode, FC, createContext, useState } from 'react';
import useContentful from '@hooks/use-contentful';

export type Wish = {
  id: string;
  sender: string;
  message: string;
};

export type NewWish = Omit<Wish, 'id'>;

export type WisherError = null | {
  message: string;
};

export type WisherState = {
  wish: NewWish;
  isValid: boolean;
  isSending: boolean;
  isSuccess: boolean;
};

export type ContextType = {
  error: WisherError;
  state: WisherState;
  reset: () => void;
  handleChange: (field: keyof NewWish, value: string) => void;
  handleSend: () => void;
};

// Default wisher state
const defaultState: WisherState = {
  wish: {
    sender: '',
    message: '',
  },
  isValid: false,
  isSending: false,
  isSuccess: false,
};

// Helper: validate state
const isValidWish = (wish: NewWish) => {
  return wish.sender.trim().length > 2 && wish.message.trim().length > 5;
};

// Wisher Context
const WisherContext = createContext<ContextType | undefined>(undefined);

// Wisher Provider
type ProviderProps = { children: ReactNode };
export const WisherProvider: FC<ProviderProps> = ({ children }) => {
  const [state, setState] = useState<WisherState>(defaultState);
  const [error, setError] = useState<WisherError>(null);
  const { listful } = useContentful<Wish>('jm24/wish');

  // Resets to default state
  const reset = () => setState(defaultState);

  // Handles input changes
  const handleChange = (field: keyof Wish, value: string) => {
    setState((prevState) => {
      const wish = { ...prevState.wish, [field]: value };
      const isValid = isValidWish(wish);

      return { ...prevState, wish, isValid };
    });
  };

  // Handles wish submission
  const handleSend = async () => {
    setState((prevState) => ({ ...prevState, isSending: true }));

    try {
      const success = await listful.add(state.wish);

      if (success) {
        setState((prevState) => ({
          ...prevState,
          isSending: false,
          isSuccess: true,
        }));
      } else {
        setError({
          message: 'An unknown error occurred. Sorry.',
        });

        setState((prevState) => ({
          ...prevState,
          isSending: false,
        }));
      }
    } catch (err) {
      let message = 'Failed to send the wish. Please try again.';
      if (err instanceof Error && err.message) message = err.message;
      setError({ message });

      setState((prevState) => ({
        ...prevState,
        isSending: false,
      }));
    }

    // Temporary - simulate a sending process
    // setTimeout(() => {
    //   setState((prevState) => ({
    //     ...prevState,
    //     isSending: false,
    //     isSuccess: true,
    //   }));
    // }, 2000);
  };

  return (
    <WisherContext.Provider
      value={{ error, state, reset, handleChange, handleSend }}
    >
      {children}
    </WisherContext.Provider>
  );
};

export default WisherContext;
