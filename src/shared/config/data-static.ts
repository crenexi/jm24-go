import DataStatic, { QuizItem, WedAction } from '@stypes/data-static.types';
import { assetsUrl } from '../constants';

// prettier-ignore
const urls = {
  urlSimpleBoothGallery: 'https://www.google.com',
};

const wedActions: WedAction[] = [
  {
    icon: 'message-heart',
    heading: 'Send Wishes',
    subtext: 'Words & advice for the couple.',
    buttonProps: {
      variant: 'primary',
      children: 'Write Wishes',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/wishes',
    },
  },
  {
    icon: 'photo-film',
    heading: 'Share Media',
    subtext: 'Add pics/video from today!',
    buttonProps: {
      variant: 'primary',
      children: 'Ways to Share',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/media',
    },
  },
  {
    icon: 'envelope-open-dollar',
    heading: 'Give Gift',
    subtext: 'Gift to our honeymoon.',
    buttonProps: {
      variant: 'primary',
      children: 'Ways to Give',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/give',
    },
  },
  {
    icon: 'images-user',
    heading: 'Booth Pics',
    subtext: 'See Photo Booth gallery!',
    buttonProps: {
      variant: 'default',
      children: 'To Gallery',
      endIcon: 'up-right-from-square',
      mode: 'a',
      target: '_blank',
      href: urls.urlSimpleBoothGallery,
    },
  },
  {
    icon: 'check-to-slot',
    heading: 'Quiz Answers',
    subtext: 'Who Knows the Couple...',
    buttonProps: {
      variant: 'default',
      children: 'See Answers',
      endIcon: 'arrow-right',
      mode: 'link',
      to: '/quiz',
    },
  },
];

// prettier-ignore
const quizItems: QuizItem[] = [
  {
    question: 'Minima alias et eaque perspiciatis. Et nostrum sed amet deserunt?',
    answerText: 'Minima alias et eaque perspiciatis. Et distinctio ipsa cum nostrum sed amet deserunt. Cumque velit consequatur sed molestias quia dolores non adipisci.',
    answerAuthor: 'James',
    answer: 'james',
  },
  {
    question: 'Minima eaque perspiciatis?',
    answerText: 'Et distinctio ipsa cum nostrum sed amet deserunt. Cumque velit consequatur sed molestias quia dolores non adipisci.',
    answerAuthor: 'Michelle',
    answer: 'james',
  },
  {
    question: 'Eaque perspiciatis. Et distinctio ipsa?',
    answerText: 'Minima alias et eaque perspiciatis. Et distinctio ipsa cum nostrum sed amet deserunt.',
    answerAuthor: 'James',
    answer: 'michelle',
  },
];

// prettier-ignore
const dataStatic: DataStatic = {
  wedActions,
  quizItems,
  welcome: {
    text1: 'Glad you made it!',
    text2: `We're honored to host you. Below are some ways you can share with us, if you wish! Want some extra fun? Click the checklist above!`,
  }
};

export default dataStatic;
