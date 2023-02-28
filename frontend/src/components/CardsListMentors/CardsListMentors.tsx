import './CardsListMentors.css';

import iconDuvan from '../../assets/imgsPrueba/icon_perfil3.png';

import Selector from '../Selector/Selector';
import CardMentors from '../CardMentors/CardMentors';

import { UserApi } from '../../helpers/Types/Cards';
import stateGlobal from '../../store';

type PropsCardsListMentors = {
  Mentors: UserApi[];
};

export default function CardsListMentors({ Mentors }: PropsCardsListMentors) {
  const { specialty, mentorFilter } = stateGlobal((state) => state) as {
    specialty: string[];
    mentorFilter: UserApi[];
  };

  if (Mentors?.length === 0) return <div className='CardsListMentors'></div>;

  return (
    <section className='CardsListMentors'>
      <div className='Filter'>
        <Selector title='Rating' options={['Mayor a menor', 'Menor a mayor']} />
        <Selector title='Lenguaje' options={specialty} />
      </div>
      <div className='Cards'>
        <CardMentors ArrayMentors={mentorFilter} />
      </div>
    </section>
  );
}
