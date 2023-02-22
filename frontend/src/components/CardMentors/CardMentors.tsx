import './CardMentors.css';

import imgPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

import { Api, CardsList, Mentor } from '../../helpers/Types/Cards';

// ~ state Global
import stateGlobal from '../../store';

interface PropsCardsMentors {
  ArrayMentors: Api;
}

function CardMentor({ img, cargo, nombre }: CardsList) {
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
  const { upgradeDetail } = stateGlobal((state) => state);
  const handleCardClick = (value: Mentor) => upgradeDetail(value);

  return (
    <div className='CardsMentors'>
      {ArrayMentors.map((element: Mentor) => {
        const { img, cargo, nombre } = element;
        return (
          <div key={nombre} onClick={() => handleCardClick(element)}>
            <CardMentor
              img={typeof img === 'string' ? img : imgPredeterminate}
              cargo={cargo}
              nombre={nombre}
            />
          </div>
        );
      })}
    </div>
  );
}
