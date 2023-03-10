import React from 'react';
import style from './ShowCard.module.css';

const ShowCard = (
  name: any,
  description: string,
  rating: string,
  language: string[],
  networks: string[]
): JSX.Element => {
  return (
    <div className='inline-block h-screen w-full bg-green-300'>
      <div className='flex'>
        <img
          src='https://img.freepik.com/foto-gratis/profesor-haciendo-leccion-ingles-linea-sus-alumnos_23-2148963017.jpg'
          alt='image'
          className={style.image}
        />
        <div className='ml-2.5 w-80 bg-blue-800'>
          <h4>name</h4>
          <p>description</p>
          <p className='items-end'>Languaje</p>
        </div>
      </div>
      <div className='flex'>
        <p>rating</p>
        <p>networks</p>
      </div>
    </div>
  );
};

export default ShowCard;
