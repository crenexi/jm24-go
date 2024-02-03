import { FC } from 'react';
import useBreakpoint from '@hooks/use-breakpoint';
import { assetsUrl } from '@constants/constants';
import { ButtonIcon } from '@components/action';
import sy from './MainHeader.scss';

const MainHeader: FC = () => {
  const isGtSm = useBreakpoint('d1+');

  const urlAlpacas = `${assetsUrl}/alpacas.svg`;

  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const narrowHeader = () => (
    <div className={sy.edge}>
      <header className={sy.header}>
        <div className={sy.header_start}>
          <div className={sy.alpacas}>
            <img src={urlAlpacas} alt="Alpacas" />
          </div>
        </div>
        <div className={sy.header_center}>
          <h6>Welcome</h6>
        </div>
        <div className={sy.header_end}>
          <ButtonIcon variant="secondary" name="list-check" />
        </div>
      </header>
    </div>
  );

  const wideHeader = () => (
    <div className={sy.gap}>
      <header className={sy.header}>
        <div className={sy.main}>Header</div>
      </header>
    </div>
  );

  return isGtSm ? wideHeader() : narrowHeader();
};

export default MainHeader;
