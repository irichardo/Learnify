import React from 'react';
import CardMentors from '../../components/CardMentors/CardMentors';
import { FiltersMentors } from '../../components/FiltersMentors/FiltersMentors';
import ShowCard from '../../components/ShowCard/ShowCard';
import style from '../styles/Mentors.module.css';

const Mentors = () => {
  return (
    <div className='container m-auto columns-2 bg-red-500 justify-center'>
      <div className='h-screen bg-blue-900'>{<ShowCard />}</div>
      <div className='w-92 h-screen inline'>
        <FiltersMentors />

        <CardMentors />
      </div>
    </div>
  );
};

export default Mentors;
