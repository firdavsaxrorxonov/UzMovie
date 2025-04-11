import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from './Card';

export default function SwiperCards({ title, items }) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-4 px-4">{title}</h2>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="relative pb-10 px-4"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-36 sm:!w-52">
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
}
