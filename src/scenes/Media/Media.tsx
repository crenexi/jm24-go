import React from 'react';
import sy from './Media.scss';

interface MediaProps {
  children?: React.ReactNode;
}

const Media: React.FC<MediaProps> = ({ children = 'TODO' }) => {
  const [value, setValue] = React.useState<null>(null);

  return (
    <div className={sy.edge}>{children}</div>
  );
};

export default Media;
