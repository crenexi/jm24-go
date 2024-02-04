import { ButtonProps } from '@components/action/Button/Button.types';

export type WedAction = {
  icon: string;
  heading: string;
  subtext: string;
  buttonProps: ButtonProps;
};

type DataStatic = {
  wedActions?: WedAction[];
  welcome?: {
    text1: string;
    text2: string;
  };
};

export default DataStatic;
