import './CardsListMentors.css';

import iconDuvan from '../../assets/imgsPrueba/icon_perfil3.png';

import Selector from '../Selector/Selector';
import CardMentors from '../CardMentors/CardMentors';

import { Api } from '../../helpers/Types/Cards';
import stateGlobal from '../../store';
import { useEffect } from 'react';

type PropsCardsListMentors = {
  Mentors: Api;
};

export default function CardsListMentors({ Mentors }: PropsCardsListMentors) {
  const { specialty } = stateGlobal((state) => state);
  useEffect(() => {}, [specialty]);
  return (
    <section className='CardsListMentors'>
      <div className='Filter'>
        <Selector title='Rating' options={['Mayor a menor', 'Menor a mayor']} />
        <Selector
          title='Lenguaje'
          options={['NodeJs', 'Go', 'Express', 'React', 'Sequelize']}
        />
      </div>
      <div className='Cards'>
        <CardMentors ArrayMentors={Mentors} />
      </div>
    </section>
  );
}
