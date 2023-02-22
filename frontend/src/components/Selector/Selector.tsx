import './Selector.css';

import iconArrowMentor from '../../assets/icons/iconArrowMentor.png';
import { useEffect, useState } from 'react';
import stateGlobal from '../../store';

interface PropsSelector {
  title: string;
  options: string[];
}

export default function Selector({ title, options }: PropsSelector) {
  const [active, setActive] = useState(false);
  const { filterMentors, FilterMentors } = stateGlobal((state) => state);

  const handleOptionsClick = () => setActive(!active);
  const handleOptionsSelection = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    filterMentors(title, event.currentTarget.value);
    console.log(FilterMentors);

    setActive(false);
  };

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
