import { useState, useEffect } from 'react';
import useDataStatic from '@hooks/use-data-static';
import logger from '@services/logger';
import WedActions from './WedActions';

const WedActionsPod: React.FC = () => {
  logger.debug('TODO: WedActions');

  const dStatic = useDataStatic();

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return <WedActions isReady={isReady} dStatic={dStatic} />;
};

export default WedActionsPod;
