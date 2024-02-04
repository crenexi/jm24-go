import React from 'react';
import sy from './Quiz.scss';

interface QuizProps {
  children?: React.ReactNode;
}

const Quiz: React.FC<QuizProps> = ({ children = 'TODO' }) => {
  const [value, setValue] = React.useState<null>(null);

  return (
    <div className={sy.edge}>{children}</div>
  );
};

export default Quiz;
