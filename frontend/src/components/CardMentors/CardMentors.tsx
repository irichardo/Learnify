import React from 'react';
import style from './CardMentors.module.css';
import data from '../ShowCard/data.json';
// import Language from '../ShowCard/Language';

const CardMentors = () => {
  // let aux = Language.map((lan) => {});
  // console.log(Language);
  // let icon = Language.map((ico) => ico.icon);}
  // console.log(icon, 'icon');
  console.log(data.map((dat) => dat.language));
  return (
    <div className={style.cards}>
      {data.map((mentor) => {
        return (
          <div key={mentor.id} className={style.divCard}>
            <img src={mentor.image} alt='image' className={style.image} />
            <div className='bg-slate-400 w-52'>
              <p className='text-center pl-3 font-bold'>{mentor.name}</p>
              <span className='flex m-auto justify-center'>
                {mentor.rating}
              </span>
              <span className='flex m-auto justify-center'>
                {mentor.language};
                {/* {console.log(mentor.language.map((lan) => lan.includes(Language.filter(lan))))} */}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardMentors;
