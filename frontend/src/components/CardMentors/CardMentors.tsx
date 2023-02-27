import './CardMentors.css';

import imgPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

import { CardsList, UserApi } from '../../helpers/Types/Cards';

// ~ state Global
import stateGlobal from '../../store';

interface PropsCardsMentors {
  ArrayMentors: UserApi[];
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
  const handleCardClick = (value: UserApi) => upgradeDetail(value);

  return (
    <div className='CardsMentors'>
      {ArrayMentors.map((element: UserApi) => {
        const { picture, type, name } = element;
        return (
          <div key={name} onClick={() => handleCardClick(element)}>
            <CardMentor
              img={typeof picture === 'string' ? picture : imgPredeterminate}
              cargo='Web Developer'
              nombre={name}
            />
          </div>
        );
      })}
    </div>
  );
}
