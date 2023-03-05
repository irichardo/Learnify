import './CardsListMentors.css';

import Selector from '../Selector/Selector';
import CardMentors from '../CardMentors/CardMentors';

import stateGlobal from '../../store';
import type { State, Actions } from '../../store';

export default function CardsListMentors() {
  const { specialty, mentorFilter } = stateGlobal<State & Actions>(
    (state) => state
  );

  if (typeof mentorFilter === undefined || typeof specialty === undefined)
    return <div className='CardsListMentors'></div>;

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
