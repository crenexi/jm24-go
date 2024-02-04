import React from 'react';
import sy from './Wishes.scss';

interface WishesProps {
  children?: React.ReactNode;
}

const Wishes: React.FC<WishesProps> = ({ children = 'TODO' }) => {
  const [value, setValue] = React.useState<null>(null);

  return (
    <div className={sy.edge}>{children}</div>
  );
};

export default Wishes;
