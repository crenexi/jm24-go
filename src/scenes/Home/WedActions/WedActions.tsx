import React from 'react';
import sy from './WedActions.scss';
import { WedAction } from '@stypes/data-static.types';

interface WedActionsProps {
  isReady: boolean;
  actions: WedAction[];
}

const WedActions: React.FC<WedActionsProps> = (props) => {
  const { isReady, actions } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.actions}>
        <pre>{JSON.stringify(actions)}</pre>
      </div>
    </div>
  );
};

export default WedActions;
