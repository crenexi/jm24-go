import { ButtonProps } from '@components/action/Button/Button.types';

export type WedAction = {
  icon: string;
  heading: string;
  subtext: string;
  buttonProps: ButtonProps;
};

export type QuizItem = {
  icon: string;
  urlCover: string;
  question: string;
  answerText: string;
  answerAuthor: string;
};

type DataStatic = {
  welcome?: {
    text1: string;
    text2: string;
  };
  wedActions?: WedAction[];
  quizItems?: QuizItem[];
};

export default DataStatic;
