import { FC } from 'react';
import { QuizItem } from '@stypes/data-static.types';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import sy from './Quiz.scss';

type QuizProps = {
  currItem: QuizItem;
  pages: {
    index: number;
    prev: () => void;
    next: () => void;
  };
};

const Quiz: FC<QuizProps> = ({ currItem, pages }) => {
  const { icon, urlCover, question, answerText, answerAuthor } = currItem;
  const backgroundImage = `url('${urlCover}')`;

  const jsxPrevButton = (
    <Button click={pages.prev} startIcon="arrow-left">
      Previous
    </Button>
  );

  const jsxNextButton = (
    <Button variant="primary" click={pages.next} endIcon="arrow-right">
      Next
    </Button>
  );

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.item}>
          <div className={sy.item_header}>
            <div className={sy.item_cover} style={{ backgroundImage }}>
              <Icon name={icon} />
            </div>
          </div>
          <div className={sy.item_main}>
            <div className={sy.item_question}>{question}</div>
            <div className={sy.item_answer}>
              <div className={sy.item_text}>{answerText}</div>
              <div className={sy.item_author}>{answerAuthor}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={sy.actions}>
        <div className={sy.actions_pages}>{pages.index}</div>
        <div className={sy.actions_buttons}>
          {jsxPrevButton}
          {jsxNextButton}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
