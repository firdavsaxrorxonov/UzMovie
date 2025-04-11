import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import SwiperCards from '../components/SwiperCards';
import data from '../../public/movies.json';

function Home() {
  const [loading, setLoading] = useState(true);
  const [multfilm, setMultfilm] = useState([]);
  const [xorij, setXorij] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const multfilmData = data.filter(item => item.category === 'Multfilm');
      const xorijData = data.filter(item => item.category === 'Xorij');
      setMultfilm(multfilmData);
      setXorij(xorijData);
      setLoading(false);
    }, 1000); // 1s delay for effect — optional

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='pt-20 min-h-screen'>
      <Carousel />
      <div className='max-w-[1400px]  mx-auto px-1 py-5 sm:py-20 mb-10'>
        <SwiperCards title="Multfilm" items={multfilm} loading={loading} />
        <SwiperCards title="Xorij Filmlari" items={xorij} loading={loading} />
      </div>
    </div>
  );
}

export default Home;
