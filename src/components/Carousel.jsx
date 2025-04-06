import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

function Carousel() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="h-screen bg-gray-200 font-sans">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-full"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center text-lg bg-white"
          >
            Slide {i + 1}
          </SwiperSlide>
        ))}

        <div
          className="absolute bottom-4 right-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-[--swiper-theme-color]"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="absolute left-0 top-0 z-10 w-full h-full transform -rotate-90"
            style={{
              strokeDasharray: '125.6',
              strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
              stroke: 'var(--swiper-theme-color)',
              strokeWidth: 4,
              fill: 'none',
            }}
          >
            <circle cx="24" cy="24" r="20" />
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
