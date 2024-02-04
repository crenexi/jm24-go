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
    <div className={sy.edge}>
      <div className={sy.actions}>
        <div className={sy.actions_header}>
          <div className={sy.welcome}>
            <div className={sy.welcome_text1}>{dStatic.welcome?.text1}</div>
            <div className={sy.welcome_text2}>{dStatic.welcome?.text2}</div>
          </div>
        </div>
        <div className={sy.actions_list}>
          {dStatic.wedActions?.map(
            ({ icon, heading, subtext, buttonProps }) => (
              <div className={sy.action} key={heading}>
                <div className={sy.action_header}>
                  <div className={sy.action_icon}>
                    <Icon name={icon} />
                  </div>
                  <div className={sy.action_headings}>
                    <div className={sy.action_heading}>{heading}</div>
                    <div className={sy.action_subtext}>{subtext}</div>
                  </div>
                </div>
                <div className={sy.action_button}>
                  <Button
                    sx={{ width: '100%' }}
                    size="lg"
                    unfocus
                    {...buttonProps}
                  />
                </div>
              </div>
            ),
          )}
        </div>
        <div className={sy.actions_footer}>
          <div className={sy.enjoy_text1}>Please</div>
          <div className={sy.enjoy_text2}>Enjoy!</div>
        </div>
      </div>
    </div>
  );
};

export default WedActions;
