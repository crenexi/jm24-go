import sy from './Home.scss';
import useDataStatic from '@hooks/use-data-static';

const Home = () => {
  const { test } = useDataStatic();

  return <div className={sy.edge}>{test}</div>;
};

export default Home;
