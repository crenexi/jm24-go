import { FC } from 'react';
import logger from '@services/logger';
import { ButtonIcon } from '@components/action';
import { WishItemProps, Wish } from '../Wish.types';
import sy from './WishItem.scss';

const WishItem: FC<WishItemProps> = ({ data, listful }) => {
  const { id, sender, message } = data;

  const handleDelete = async (id: string) => {
    try {
      await listful.remove(id);
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <div key={id} className={sy.wish}>
      <div className={sy.wish_main}>
        <div className={sy.wish_message}>{message}</div>
        <div className={sy.wish_sender}>- {sender}</div>
      </div>
      <div className={sy.wish_actions}>
        <ButtonIcon
          name="trash"
          variant={'ghost'}
          click={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default WishItem;
