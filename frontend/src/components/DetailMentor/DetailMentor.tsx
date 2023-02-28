import './DetailMentor.css';

import { Mentor, UserApi } from '../../helpers/Types/Cards';
import imagenPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

import CardData from '../CardData/CardData';
import CardStar from '../CardStar/CardStar';
import stateGlobal from '../../store';
import { useEffect, useState } from 'react';

import iconReact from '../../assets/imgsPrueba/icon_react.png';
import iconNodeJs from '../../assets/imgsPrueba/icon_nodejs.png';
import iconSequelize from '../../assets/imgsPrueba/icon_sequelize.png';

import iconLinkedin from '../../assets/imgsPrueba/icon_Linkedin.png';
import iconTwitter from '../../assets/imgsPrueba/icon_Twitter.png';
import iconGithub from '../../assets/imgsPrueba/icon_github.png';

type PropsDetailMentor = {
  dataMentor: UserApi;
};

const propiedadesData = {
  expert: [
    { imgs: iconReact, nombre: 'React' },
    { imgs: iconNodeJs, nombre: 'NodeJs' },
    { imgs: iconSequelize, nombre: 'Sequelize' },
  ],
  redes: [
    { imgs: iconLinkedin, nombre: 'Github' },
    { imgs: iconTwitter, nombre: 'Linkedin' },
    { imgs: iconGithub, nombre: 'Twitter' },
  ],
  rating: 5,
};

const DetailMentor = ({ dataMentor }: PropsDetailMentor) => {
  if (Object.keys(dataMentor).length === 0)
    return <div className='DetailMentor'></div>;

  // ! Falta expert, redes, rating, cargo, description
  const { picture, name } = dataMentor;
  return (
    <div className='DetailMentor'>
      <div className='mentorProfile'>
        <div className='mentorImgName'>
          <img
            id='imgProfile'
            src={typeof picture === 'string' ? picture : imagenPredeterminate}
            alt='imgPrueba'
          />
          <h1 id='Name'>{name}</h1>
        </div>
        <div className='mentorInfoMentors'>
          <section className='mentorData'>
            <div className='mentorExpert'>
              <CardData
                arrayExpert={propiedadesData.expert}
                title='Experto en:'
              />
            </div>

            <div className='mentorRedes'>
              <CardData arrayExpert={propiedadesData.redes} title='Redes:' />
            </div>

            <div className='mentorRating'>
              <p>rating: </p>
              <CardStar rating={propiedadesData.rating} />
            </div>
          </section>

          <div className='mentorDescription'>
            <h1>Web Developer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMentor;
