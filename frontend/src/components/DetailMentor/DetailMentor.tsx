import './DetailMentor.css';
import imgPrueba from '../../assets/imgsPrueba/perfil-Prueba.png';
import iconReact from '../../assets/imgsPrueba/icon_react.png';
import iconNodeJs from '../../assets/imgsPrueba/icon_nodejs.png';
import iconSequelize from '../../assets/imgsPrueba/icon_sequelize.png';

import iconLinkedin from '../../assets/imgsPrueba/icon_Linkedin.png';
import iconTwitter from '../../assets/imgsPrueba/icon_Twitter.png';
import iconGithub from '../../assets/imgsPrueba/icon_github.png';

import CardData from '../CardData/CardData';
import CardStar from '../CardStar/CardStar';

type Data = {
  imgs: string;
  nombre: string;
};

type Confing = Data[];

type Mentor = {
  img: string;
  cargo: string;
  nombre: string;
  description: string;
  expert: Confing;
  redes: Confing;
  rating: number;
};

const simulatorApi: Mentor = {
  img: imgPrueba,
  cargo: 'Web Developer',
  nombre: 'Cristian Velarde',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  expert: [
    {
      imgs: iconReact,
      nombre: 'React',
    },
    {
      imgs: iconNodeJs,
      nombre: 'NodeJs',
    },
    {
      imgs: iconSequelize,
      nombre: 'Sequelize',
    },
  ],
  redes: [
    {
      imgs: iconLinkedin,
      nombre: 'Github',
    },
    {
      imgs: iconTwitter,
      nombre: 'Linkedin',
    },
    {
      imgs: iconGithub,
      nombre: 'Twitter',
    },
  ],
  rating: 5,
};
const DetailMentor = () => {
  return (
    <div className='DetailMentor'>
      <div className='mentorProfile'>
        <div className='mentorImgName'>
          <img id='imgProfile' src={imgPrueba} alt='imgPrueba' />
          <h1 id='Name'>{simulatorApi.nombre}</h1>
        </div>
        <div className='mentorInfoMentors'>
          <section className='mentorData'>
            <div className='mentorExpert'>
              <CardData arrayExpert={simulatorApi.expert} title='Experto en:' />
            </div>

            <div className='mentorRedes'>
              <CardData arrayExpert={simulatorApi.redes} title='Redes:' />
            </div>

            <div className='mentorRating'>
              <p>rating: </p>
              <CardStar rating={simulatorApi.rating} />
            </div>
          </section>

          <div className='mentorDescription'>
            <h1>{simulatorApi.cargo}</h1>
            <p>{simulatorApi.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMentor;
