import { FC } from 'react';
import { CXLogo, CXFav } from '@components/legos';
import { Block, BlockSet } from '../../index';
import sy from './KitLogosFavs.scss';

const KitLogosFavs: FC = () => (
  <div className={sy.edge}>
    <div className={sy.logos}>
      <BlockSet heading="Crenexi Brand">
        <Block label="Logo">
          <div className={sy.logo}>
            <CXLogo theme="cx" />
          </div>
          <div className={sy.logo}>
            <CXLogo theme="cf" />
          </div>
          <div className={sy.logo}>
            <CXLogo theme="cu" />
          </div>
          <code>{`<CXLogo theme="cf" variant="light" size="sm" />`}</code>
        </Block>
        <Block label="Fav">
          <div className={sy.favs}>
            <div className={sy.fav}>
              <CXFav theme="cx" />
            </div>
            <div className={sy.fav}>
              <CXFav theme="cf" />
            </div>
            <div className={sy.fav}>
              <CXFav theme="cu" />
            </div>
          </div>
          <code>{`<CXFav theme="cf" variant="light" size="sm" />`}</code>
        </Block>
      </BlockSet>
    </div>
  </div>
);

export default KitLogosFavs;
