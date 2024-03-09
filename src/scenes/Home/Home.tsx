import sy from './Home.scss';
import { WedLogo } from '@components/legos';
import Alpacas from './Alpacas';
import WedActions from './WedActions';

const Home = () => {
  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.main_actions}>
          <WedActions />
        </div>
      </div>
      <Alpacas />
    </div>
  );
};

export default Home;
