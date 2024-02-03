import sy from './Home.scss';
import useDataStatic from '@hooks/use-data-static';
import { WedLogo } from '@components/legos';

const Home = () => {
  const { test } = useDataStatic();

  return (
    <div className={sy.edge}>
      <div className={sy.hello}>
        <div className={sy.hello_center}>
          <div className={sy.hello_logo}>
            <WedLogo variant="main" size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
