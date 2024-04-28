import { FC, ReactNode } from 'react';
import { Icon } from '@components/legos';
import { Button } from '@components/action';
import sy from './ReturnHomeBlock.scss';

type ReturnHomeBlockProps = {
  children: ReactNode;
};

const ReturnHomeBlock: FC<ReturnHomeBlockProps> = ({ children }) => {
  const poweredByText = 'This website is powered by cats running around a hydraulic turbine, producing zero-emission catelectric power.' // prettier-ignore

  const jsxReturn = (
    <div className={sy.buttonBox}>
      <Button mode="link" to="/" startIcon="arrow-left">
        <span>MENU</span>
      </Button>
    </div>
  );

  return (
    <div className={sy.edge}>
      <div className={sy.edge_inner}>
        <div className={sy.return}>{jsxReturn}</div>
        <div className={sy.main}>{children}</div>
        <div className={sy.return}>{jsxReturn}</div>
        <div className={sy.footer}>
          <div className={sy.footer_main}>
            <div className={sy.footer_icon}>
              <Icon name="shield-cat" />
            </div>
            <span>{poweredByText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnHomeBlock;
