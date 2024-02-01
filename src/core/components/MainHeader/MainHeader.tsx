import { FC } from 'react';
import useBreakpoint from '@hooks/use-breakpoint';
import sy from './MainHeader.scss';

const MainHeader: FC = () => {
  const isGtSm = useBreakpoint('d1+');

  // const [drawerOpen, setDrawerOpen] = useState(false);
  // const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const narrowHeader = () => (
    <div className={sy.edge}>
      <header className={sy.header}>Mobile Header</header>
    </div>
  );

  const wideHeader = () => (
    <div className={sy.gap}>
      <header className={sy.header}>
        <div className={sy.main}>Wide Header</div>
      </header>
    </div>
  );

  return isGtSm ? wideHeader() : narrowHeader();
};

export default MainHeader;
