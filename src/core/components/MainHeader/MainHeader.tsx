import { FC, Fragment } from 'react';
import useBreakpoint from '@hooks/use-breakpoint';
import { assetsUrl } from '@constants/constants';
import { ButtonIcon } from '@components/action';
import sy from './MainHeader.scss';

const MainHeader: FC = () => {
  const isGtSm = useBreakpoint('d1+');

  const urlAlpacas = `${assetsUrl}/alpacas.svg`;

  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const jsxHeaderMain = (
    <header className={sy.header_main}>
      <div className={sy.header_start}>
        <div className={sy.alpacas}>
          <img src={urlAlpacas} alt="Alpacas" />
        </div>
      </div>
      <div className={sy.header_center}>
        <h6>Welcome</h6>
      </div>
      <div className={sy.header_end}>
        <ButtonIcon variant="ghost" name="list-check" />
      </div>
    </header>
  );

  const narrowHeader = () => (
    <Fragment>
      <div className={sy.gap} />
      <div className={sy.header}>{jsxHeaderMain}</div>
    </Fragment>
  );

  const wideHeader = () => (
    <Fragment>
      <div className={sy.gap} />
      <div className={sy.header}>{jsxHeaderMain}</div>
    </Fragment>
  );

  return isGtSm ? wideHeader() : narrowHeader();
};

export default MainHeader;
