// components/Home.jsx
import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel';
import CategorySlider from '../components/CategorySlider';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies.json')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  const multfilms = movies.filter(m => m.category === 'Multfilm');
  const foreignFilms = movies.filter(m => m.category === 'Xorij');

  return (
    <div className='pt-20 min-h-dvh'>
      <Carousel />
      <div className='container max-w-[1400px] mx-auto'>
        <CategorySlider title="Multfilmlar" movies={multfilms} />
        <CategorySlider title="Xorij Filmlari" movies={foreignFilms} />
      </div>
    </div>
  );
}

export default Home;
