import React from 'react';
import style from './CardMentors.module.css';
import data from '../ShowCard/data.json';
import Language from '../ShowCard/Language';

function CardMentors() {
  //   console.log(data);

  return (
    <div className={style.cards}>
      {data.map((mentor) => {
        return (
          <div key={mentor.id} className={style.divCard}>
            <img src={mentor.image} alt='image' className={style.image} />
            <p className='text-center'>{mentor.name}</p>
            <span className='flex m-auto justify-center'>{mentor.rating}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CardMentors;
