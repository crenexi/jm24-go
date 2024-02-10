import { FC, ReactNode } from 'react';
import { Button } from '@components/action';
import sy from './ReturnHomeBlock.scss';

type ReturnHomeBlockProps = {
  children: ReactNode;
};

const ReturnHomeBlock: FC<ReturnHomeBlockProps> = ({ children }) => {
  const jsxReturn = (
    <div className={sy.buttonBox}>
      <Button mode="link" to="/" startIcon="arrow-left">
        <span>Main List</span>
      </Button>
    </div>
  );

  return (
    <div className={sy.edge}>
      <div className={sy.return}>{jsxReturn}</div>
      <div className={sy.main}>{children}</div>
      <div className={sy.return}>{jsxReturn}</div>
    </div>
  );
};

export default ReturnHomeBlock;
