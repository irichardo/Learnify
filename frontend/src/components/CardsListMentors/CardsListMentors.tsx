import './CardsListMentors.css';

import iconDuvan from '../../assets/imgsPrueba/icon_perfil3.png';

import Selector from '../Selector/Selector';
import CardMentors from '../CardMentors/CardMentors';

import { ValidateMentors } from '../../helpers/Types/Cards';

const Mentors: ValidateMentors = [
  {
    img: iconDuvan,
    cargo: 'Web Developer',
    nombre: 'Duvan Rozo',
  },
  {
    img: undefined,
    cargo: 'Web Developer',
    nombre: 'Isaias Romero',
  },
  {
    img: undefined,
    cargo: 'Web Developer',
    nombre: 'Richard Diaz',
  },
  {
    img: undefined,
    cargo: 'Web Developer',
    nombre: 'Persona Prueba',
  },
];

export default function CardsListMentors() {
  return (
    <section className='CardsListMentors'>
      <div className='Filter'>
        <Selector title='Rating' options={['Mayor a menor', 'Menor a Mayor']} />
        <Selector
          title='Lenguaje'
          options={['Nodejs', 'Go', 'Express', 'React', 'MongoDb']}
        />
      </div>
      <div className='Cards'>
        <CardMentors ArrayMentors={Mentors} />
      </div>
    </section>
  );
}
