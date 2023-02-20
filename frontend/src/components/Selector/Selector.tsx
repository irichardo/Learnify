import './Selector.css';

import iconArrowMentor from '../../assets/icons/iconArrowMentor.png';
import { useState } from 'react';

interface PropsSelector {
  title: string;
  options: string[];
}

export default function Selector({ title, options }: PropsSelector) {
  const [active, setActive] = useState(false);

  const handleOptionsClick = () => setActive(!active);
  const handleOptionsSelection = () => setActive(false);

  return (
    <div className='SelectorRating'>
      <div onClick={handleOptionsClick} className='PlaceholderRating'>
        <p>{title}</p>
        <img
          className={!active ? 'onImg' : 'offImg'}
          src={iconArrowMentor}
          alt='iconArrowMentor'
        />
      </div>

      <div className={active ? 'OptionsRatingOn' : 'OptionsRatingOff'}>
        <div className='Options'>
          {options.map((option: string) => (
            <button
              onClick={handleOptionsSelection}
              key={option}
              value={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
