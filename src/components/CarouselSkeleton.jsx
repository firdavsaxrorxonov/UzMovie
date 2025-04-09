import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const CarouselSkeleton = () => {
  return (
    <div className="w-full h-full relative">
      {/* Skeleton for image */}
      <Skeleton className="w-full h-full absolute top-0 left-0" />

      {/* Skeleton for text content */}
      <div className="absolute top-20 left-5 max-w-[450px] md:top-40 md:left-15 z-10 text-white">
        <Skeleton height={40} width={200} />
        <Skeleton count={2} width={300} className="mt-2" />
        <div className="flex gap-2 mt-4">
          <Skeleton width={100} height={40} />
          <Skeleton width={120} height={40} />
        </div>
      </div>
    </div>
  );
};

export default CarouselSkeleton;
