import { FC, CSSProperties } from 'react';
import { Icon } from '@components/legos';
import classNames from 'classnames';
import sy from './LoadingBlock.scss';

type LoadingBlockProps = {
  iconName?: string;
  padSize?: string;
};

const LoadingBlock: FC<LoadingBlockProps> = ({
  iconName = 'spinner-third',
  padSize = 'md',
}) => {
  const sizeKeys = ['sm', 'md', 'lg'];

  // Allows custom padding
  const sxEdge: CSSProperties = {};
  if (padSize && !sizeKeys.includes(padSize)) {
    sxEdge.padding = padSize;
  }

  const sxIcon = {
    animationDuration: '500ms',
  };

  const cnEdge = classNames(sy.edge, {
    [sy.edge__padSm]: padSize === 'sm',
    [sy.edge__padMd]: padSize === 'md',
    [sy.edge__padLg]: padSize === 'lg',
  });

  return (
    <div className={cnEdge} style={sxEdge}>
      <Icon name={iconName} size="xl" style={sxIcon} spin />
    </div>
  );
};

export default LoadingBlock;
