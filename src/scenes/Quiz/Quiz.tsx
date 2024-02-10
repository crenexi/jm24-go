import { FC } from 'react';
import { QuizItem } from '@stypes/data-static.types';
import { Button, ReturnHomeBlock } from '@components/action';
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
    <ReturnHomeBlock>
      <div className={sy.header}>
        <div className={sy.header_title}>
          <h2>Who Knows</h2>
          <h6>The couple?</h6>
        </div>
        <div className={sy.actions}>
          {jsxPrevButton}
          {jsxNextButton}
        </div>
      </div>
      <div className={sy.main}>
        <div className={sy.item}>
          <div className={sy.item_header}>
            <div className={sy.item_cover} style={{ backgroundImage }}>
              <div className={sy.item_icon}>
                <Icon name={icon} />
              </div>
            </div>
          </div>
          <div className={sy.item_main}>
            <div className={sy.item_question}>{question}</div>
            <div className={sy.item_answer}>
              <div className={sy.item_text}>{answerText}</div>
              <div className={sy.item_author}>&mdash; {answerAuthor}</div>
            </div>
          </div>
        </div>
      </div>
    </ReturnHomeBlock>
  );
};

export default Quiz;
