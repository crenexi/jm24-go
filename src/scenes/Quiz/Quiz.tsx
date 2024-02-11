import { FC, useState, useEffect } from 'react';
import { QuizItem } from '@stypes/data-static.types';
import { Button, ReturnHomeBlock } from '@components/action';
import { Icon } from '@components/legos';
import classNames from 'classnames';
import sy from './Quiz.scss';

type QuizProps = {
  currItem: QuizItem;
  pages: {
    count: number;
    index: number;
    prev: () => void;
    next: () => void;
  };
  portraits: {
    urlMichelle: string;
    urlJames: string;
  };
};

const Quiz: FC<QuizProps> = ({ currItem, pages, portraits }) => {
  const { question, answerText, answerAuthor } = currItem;

  const [cnMichelle, setCnMichelle] = useState<string>(sy.option);
  const [cnJames, setCnJames] = useState<string>(sy.option);

  useEffect(() => {
    setCnJames(classNames(sy.option, sy.option__loading));
    setCnMichelle(classNames(sy.option, sy.option__loading));

    const timeout = setTimeout(() => {
      switch (currItem.answer) {
        case 'michelle':
          setCnMichelle(classNames(sy.option, sy.option__answer));
          setCnJames(sy.option);
          break;
        case 'james':
          setCnMichelle(sy.option);
          setCnJames(classNames(sy.option, sy.option__answer));
          break;
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currItem]);

  return (
    <ReturnHomeBlock>
      <div className={sy.header}>
        <div className={sy.header_title}>
          <h2>Who Knows</h2>
          <h6>The couple?</h6>
        </div>
        <div className={sy.header_actions}>
          <Button variant="ghost" click={pages.prev} startIcon="chevron-left">
            Previous
          </Button>
          <div className={sy.header_pages}>
            {pages.index + 1} / {pages.count}
          </div>
          <Button variant="primary" click={pages.next} endIcon="chevron-right">
            Next
          </Button>
        </div>
      </div>
      <div className={sy.main}>
        <div className={sy.question}>{question}</div>
        <div className={sy.options}>
          <div className={cnMichelle}>
            <img src={portraits.urlMichelle} alt="Michelle portrait" />
          </div>
          <div className={cnJames}>
            <img src={portraits.urlJames} alt="James portrait" />
          </div>
        </div>
        <div className={sy.answer}>
          <div className={sy.answer_text}>{answerText}</div>
          <div className={sy.answer_author}>&mdash; {answerAuthor}</div>
        </div>
      </div>
    </ReturnHomeBlock>
  );
};

export default Quiz;
