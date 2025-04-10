import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import Card from './Card';

const SwiperCards = ({ title, items }) => {
  return (
    <div className='max-w-[1400px] mx-auto  px-3 sm:px-8 py-5 sm:py-20 mb-10'>
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="relative pb-10" // bu yer muhim
      >

        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-[140px] sm:!w-[180px] md:!w-[200px] lg:!w-[220px]">
            <Card
              title={item.title}
              poster={item.poster}
              age={item.ageLimit}
            />
          </SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
