import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function Card({ title, poster, age }) {
  return (
    <div className='card cursor-pointer group w-36 h-56 sm:w-52 sm:h-80 flex-shrink-0'>
      <div className="card-contain flex items-center justify-center w-full h-full bg-red-400 rounded-2xl overflow-hidden relative">
        <div className='w-10 right-2 flex items-center justify-center rounded-xl top-2 h-10 backdrop-blur-3xl z-40 absolute'>
          <span className='text-md'>{age}+</span>
        </div>
        <img
          src={poster}
          className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
          alt={title}
        />
        <FontAwesomeIcon className='text-5xl text-[#1AB196] z-50 absolute opacity-0 group-hover:opacity-100 transition duration-500' icon={faCirclePlay} />

        <div className="absolute inset-0 bg-[#0000009c] bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      <h3 className='text-lg m-1.5 overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h3>
    </div>
  );
}

export default Card;
