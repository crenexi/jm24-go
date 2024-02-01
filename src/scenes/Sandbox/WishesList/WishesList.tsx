import { FC } from 'react';
import useContentful from '@hooks/use-contentful';
import { Loading } from '@components/feedback';
import { Button } from '@components/action';
import { Wish } from './Wish.types';
import WishItem from './WishItem';
import sy from './WishesList.scss';

const WishesList: FC = () => {
  const {
    data: wishes,
    isLoading,
    error,
    listful,
  } = useContentful<Wish>('jm24/wish');

  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;

  const handleAdd = async () => {
    const newWish = {
      sender: 'James Blume',
      message: `Congrats on the wedding! Enjoy your London trip. Maybe you can check out the Kew Gardens, that's a cool place.`,
    };

    await listful.add(newWish);
  };

  const jsxWishes = wishes && wishes.map((wish) => (
    <WishItem key={wish.id} data={wish} listful={listful} />
  )); // prettier-ignore

  return (
    <div className={sy.edge}>
      <div className={sy.wishes}>{jsxWishes}</div>
      <div className={sy.actions}>
        <Button variant="secondary" endIcon="plus" click={handleAdd}>
          Add Test Wish
        </Button>
      </div>
    </div>
  );
};

export default WishesList;
