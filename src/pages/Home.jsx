import React from 'react';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import data from '../../public/movies.json';

function Home() {
  // Kategoriyalarni ajratish
  const multfilm = data.filter(item => item.category === 'Multfilm');
  const xorij = data.filter(item => item.category === 'Xorij');

  return (
    <div className='pt-20 min-h-screen'>
      <Carousel />

      {/* Multfilm Kategoriyasi */}
      <div className='max-w-[1400px] mx-auto px-8 py-5 sm:py-20 mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Multfilm</h2>
        <div className='flex flex-wrap justify-between items-start gap-x-5 max-[387px]:justify-center sm:gap-x-10 gap-y-16'>
          {multfilm.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              poster={item.poster}
              age={item.ageLimit}
              className="w-1/4" // Kartalar kengligini belgilash
            />
          ))}
        </div>
      </div>

      {/* Xorij Kategoriyasi */}
      <div className='max-w-[1400px] px-8 mx-auto py-5 mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Xorij Filmlari</h2>
        <div className='flex flex-wrap justify-between items-start gap-x-5 max-[387px]:justify-center sm:gap-x-10 gap-y-16'>
          {xorij.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              poster={item.poster}
              age={item.ageLimit}
              className="w-1/4" // Kartalar kengligini belgilash
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
