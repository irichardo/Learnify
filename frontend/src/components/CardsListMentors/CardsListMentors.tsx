import './CardsListMentors.css';

import Selector from '../Selector/Selector';
import CardMentors from '../CardMentors/CardMentors';

import stateGlobal from '../../store';
import type { State, Actions } from '../../store';
import TableData from '../TableData/TableData';

export default function CardsListMentors() {
  const { specialty, ArrayMentors } = stateGlobal<State & Actions>(
    (state) => state
  );

  if (typeof ArrayMentors === undefined || typeof specialty === undefined)
    return <div className='CardsListMentors'></div>;

  const ArrayData = ArrayMentors.map((mentor) => ({
    img: mentor.picture,
    title: mentor.name,
    cargo: 'Web Developer',
  }));

  return (
    <section className='CardsListMentors'>
      <TableData arrayData={ArrayData} />
    </section>
  );
}
