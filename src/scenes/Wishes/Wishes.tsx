import { FC } from 'react';
import { assetsUrl } from '@src/shared/constants';
import { Icon } from '@components/legos';
import { ReturnHomeBlock } from '@components/action';
import { Title } from '@components/display';
import sy from './Wishes.scss';

const Wishes: FC = () => {
  // prettier-ignore
  const data = {
    gifCheers: `${assetsUrl}/cheers.gif`,
  };

  return (
    <ReturnHomeBlock>
      <div className={sy.header}>
        <div className={sy.header_icon}>
          <Icon name="wand-sparkles" />
        </div>
        <Title title="Send" subtitle="us a wish or advice!" />
        <div className={sy.gif}>
          <img src={data.gifCheers} alt="Cheers gif" />
        </div>
        <div className={sy.header_invite}>
          <Icon name="chevrons-down" />
        </div>
      </div>
    </ReturnHomeBlock>
  );
};

export default Wishes;
