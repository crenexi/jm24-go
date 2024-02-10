import { FC } from 'react';
import { assetsUrl } from '@src/shared/constants';
import { ReturnHomeBlock } from '@components/action';
import sy from './Wishes.scss';

const Wishes: FC = () => {
  // prettier-ignore
  const data = {
    gifCheers: `${assetsUrl}/cheers.gif`,
  };

  return (
    <ReturnHomeBlock>
      <div className={sy.gif}>
        <img src={data.gifCheers} alt="Cheers gif" />
      </div>
    </ReturnHomeBlock>
  );
};

export default Wishes;
