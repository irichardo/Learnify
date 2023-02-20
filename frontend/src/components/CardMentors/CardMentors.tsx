import './CardMentors.css';

import imgPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

import { ValidateMentors, Cards } from '../../helpers/Types/Cards';

interface PropsCardsMentors {
  ArrayMentors: ValidateMentors;
}

function CardMentor({ img, cargo, nombre }: Cards) {
  return (
    <div className='cardMentor'>
      <img src={img} alt={nombre} />
      <div className='CardInfo'>
        <p className={'cardName'}>{nombre}</p>
        <p className={'cardCargo'}>{cargo}</p>
      </div>
    </div>
  );
}

export default function CardMentors({ ArrayMentors }: PropsCardsMentors) {
  return (
    <div className='CardsMentors'>
      {ArrayMentors.map(({ img, cargo, nombre }: Cards) => (
        <CardMentor
          img={typeof img === 'string' ? img : imgPredeterminate}
          cargo={cargo}
          nombre={nombre}
        />
      ))}
    </div>
  );
}
