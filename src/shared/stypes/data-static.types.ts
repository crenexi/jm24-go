import { ButtonProps } from '@components/action/Button/Button.types';

export type WedAction = {
  icon: string;
  heading: string;
  subtext: string;
  buttonProps: ButtonProps;
};

type DataStatic = {
  wedActions?: WedAction[];
};

export default DataStatic;
