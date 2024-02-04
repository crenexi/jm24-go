import { FC } from 'react';
import { assetsUrl } from '@src/shared/constants';
import sy from './Wishes.scss';

const Wishes: FC = () => {
  // prettier-ignore
  const data = {
    gifCheers: `${assetsUrl}/cheers.gif`,
  };

  return (
    <div className={sy.edge}>
      <div className={sy.gif}>
        <img src={data.gifCheers} alt="Cheers gif" />
      </div>
    </div>
  );
};

export default Wishes;
