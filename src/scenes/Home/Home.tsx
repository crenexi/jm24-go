import sy from './Home.scss';
import { WedLogo } from '@components/legos';
import WedActions from './WedActions';

const Home = () => {
  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.main_actions}>
          <WedActions />
        </div>
      </div>
      <div className={sy.end}>
        <div className={sy.end_center}>
          <div className={sy.end_logo}>
            <WedLogo variant="main" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
