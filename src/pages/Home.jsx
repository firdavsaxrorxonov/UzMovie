import React from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import data from '../../public/movies.json';
import SwiperCards from '../components/SwiperCards';

function Home() {
  // Kategoriyalarni ajratish
  const multfilm = data.filter(item => item.category === 'Multfilm');
  const xorij = data.filter(item => item.category === 'Xorij');

  return (
    <div className='pt-20 min-h-screen'>
      <Carousel />

      {/* Multfilm Kategoriyasi */}
      <div className='max-w-[1400px] mx-auto px-1 py-5 sm:py-20 mb-10'>
        {/* Multfilm kategoriyasi */}
        <SwiperCards title="Multfilm" items={multfilm} />

        {/* Xorij kategoriyasi */}
        <SwiperCards title="Xorij Filmlari" items={xorij} />
      </div>
    </div>
  );
}

export default Home;
