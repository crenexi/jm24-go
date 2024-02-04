import DataStatic from '@stypes/data-static.types';
import { ButtonVariant } from '@stypes/general.types';

const wedActions = [
  {
    icon: 'message-heart',
    heading: 'Send Wishes',
    subtext: 'Words & advice for the couple.',
    buttonProps: {
      variant: 'primary' as ButtonVariant,
      children: 'Write Wishes',
      endIcon: 'arrow-right',
    },
  },
  {
    icon: 'photo-film',
    heading: 'Share Media',
    subtext: 'Add pics/video from today!',
    buttonProps: {
      variant: 'primary' as ButtonVariant,
      children: 'Ways to Share',
      endIcon: 'arrow-right',
    },
  },
  {
    icon: 'envelope-open-dollar',
    heading: 'Give Gift',
    subtext: 'Gift to our honeymoon.',
    buttonProps: {
      variant: 'primary' as ButtonVariant,
      children: 'To Registry',
      endIcon: 'up-right-from-square',
    },
  },
  {
    icon: 'images-user',
    heading: 'Booth Pics',
    subtext: 'See Photo Booth gallery!',
    buttonProps: {
      variant: 'default' as ButtonVariant,
      children: 'To Gallery',
      endIcon: 'up-right-from-square',
    },
  },
  {
    icon: 'check-to-slot',
    heading: 'Quiz Answers',
    subtext: 'Who Knows the Couple...',
    buttonProps: {
      variant: 'default' as ButtonVariant,
      children: 'See Answers',
      endIcon: 'arrow-right',
    },
  },
];

// prettier-ignore
const dataStatic: DataStatic = {
  wedActions,
  welcome: {
    text1: 'Glad you made it!',
    text2: `We're honored to host you. Below are some ways you can share with us, if you wish! Want some extra fun? Click the checklist above!`,
  }
};

export default dataStatic;
