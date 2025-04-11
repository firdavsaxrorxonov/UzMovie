import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  const baseColor = '#1f1f1f';
  const highlightColor = '#333';

  return (
    <div className='w-36 h-56 sm:w-52 sm:h-80 flex-shrink-0 animate-pulse'>
      <div className="w-full h-full bg-transparent rounded-2xl relative overflow-hidden">
        <Skeleton
          className="w-full h-full rounded-2xl"
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
        <div className="absolute top-2 right-2 w-10 h-10 rounded-xl">
          <Skeleton
            height="100%"
            width="100%"
            baseColor={baseColor}
            highlightColor={highlightColor}
            style={{ borderRadius: '0.75rem' }}
          />
        </div>
      </div>
      <div className="mt-2">
        <Skeleton
          height={18}
          width="80%"
          baseColor={baseColor}
          highlightColor={highlightColor}
          style={{ borderRadius: '0.375rem' }}
        />
      </div>
    </div>
  );
};

export default CardSkeleton;
