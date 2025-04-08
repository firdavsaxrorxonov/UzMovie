// components/CategorySlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

function CategorySlider({ title, movies }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {movies.map(movie => (
          <SwiperSlide key={movie.id} style={{ width: '160px', display: 'flex', justifyContent: 'center' }}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CategorySlider;
