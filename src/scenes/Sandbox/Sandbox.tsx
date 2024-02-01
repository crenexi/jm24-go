import { FC } from 'react';
import WishesList from './WishesList';
import sy from './Sandbox.scss';

const Sandbox: FC = () => {
  return (
    <div className={sy.edge}>
      <WishesList />
    </div>
  );
};

export default Sandbox;
