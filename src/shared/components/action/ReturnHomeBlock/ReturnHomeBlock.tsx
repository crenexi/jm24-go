import { FC } from 'react';
import { Button } from '@components/action';
import sy from './ReturnHomeBlock.scss';

const ReturnHomeBlock: FC = () => {
  return (
    <div className={sy.edge}>
      <Button mode="link" to="/" startIcon="arrow-left">
        <span>Back to Main List</span>
      </Button>
    </div>
  );
};

export default ReturnHomeBlock;
