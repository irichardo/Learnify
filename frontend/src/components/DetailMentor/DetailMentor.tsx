import './DetailMentor.css';

import { Mentor } from '../../helpers/Types/Cards';
import imagenPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png'

import CardData from '../CardData/CardData';
import CardStar from '../CardStar/CardStar';

type PropsDetailMentor = {
  firstPosition: Mentor;
};

const DetailMentor = (props: PropsDetailMentor) => {
  const { firstPosition } = props;
  const { img, nombre, expert, redes, rating, cargo, description } =
    firstPosition;
  return (
    <div className='DetailMentor'>
      <div className='mentorProfile'>
        <div className='mentorImgName'>
          <img
            id='imgProfile'
            src={typeof img === 'string' ? img : imagenPredeterminate}
            alt='imgPrueba'
          />
          <h1 id='Name'>{nombre}</h1>
        </div>
        <div className='mentorInfoMentors'>
          <section className='mentorData'>
            <div className='mentorExpert'>
              <CardData arrayExpert={expert} title='Experto en:' />
            </div>

            <div className='mentorRedes'>
              <CardData arrayExpert={redes} title='Redes:' />
            </div>

            <div className='mentorRating'>
              <p>rating: </p>
              <CardStar rating={rating} />
            </div>
          </section>

          <div className='mentorDescription'>
            <h1>{cargo}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMentor;
