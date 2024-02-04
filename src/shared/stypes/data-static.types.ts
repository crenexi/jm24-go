import { ButtonProps } from '@components/action/Button/Button.types';

export type WedAction = {
  icon: string;
  heading: string;
  subtext: string;
  buttonProps: ButtonProps;
};

type DataStatic = {
  welcome?: {
    text1: string;
    text2: string;
  };
  wedActions?: WedAction[];
};

export default DataStatic;
