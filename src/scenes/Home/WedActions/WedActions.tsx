import { FC } from 'react';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import DataStatic from '@stypes/data-static.types';
import sy from './WedActions.scss';

interface WedActionsProps {
  isReady: boolean;
  dStatic: DataStatic;
}

const WedActions: FC<WedActionsProps> = (props) => {
  const { isReady, dStatic } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.list}>
      {dStatic.wedActions?.map(({ icon, heading, subtext, buttonProps }) => (
        <div className={sy.item} key={heading}>
          <div className={sy.item_header}>
            <div className={sy.item_icon}>
              <Icon name={icon} />
            </div>
            <div className={sy.item_headings}>
              <div className={sy.item_heading}>{heading}</div>
              <div className={sy.item_subtext}>{subtext}</div>
            </div>
          </div>
          <div className={sy.item_button}>
            <Button sx={{ width: '100%' }} size="lg" unfocus {...buttonProps} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WedActions;
