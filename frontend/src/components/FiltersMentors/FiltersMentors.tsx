import React from 'react';
import data from '../ShowCard/data.json';
// import Language from '../ShowCard/Language';

export const FiltersMentors = () => {
  let lang = data.map((lan) => lan.language).flat();
  const aux = Array.from(lang);

  // console.log(aux);

  return (
    <div className='inline-block mb-6'>
      <p>Filter by language</p>
      <select key={Math.random()}>
        <option value='All'>All</option>
        {lang.map((lan) => (
          <option value={lan} key={lan}>
            {lan}
          </option>
        ))}
      </select>
    </div>
  );
};
