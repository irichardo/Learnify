import { create } from 'zustand';
import { Mentor, Api, Specialty } from '../helpers/Types/Cards';
import axios from 'axios';

import imgDuvan from '../assets/imgsPrueba/icon_perfil3.png';

import imgPrueba from '../assets/imgsPrueba/perfil-Prueba.png';
import iconReact from '../assets/imgsPrueba/icon_react.png';
import iconNodeJs from '../assets/imgsPrueba/icon_nodejs.png';
import iconSequelize from '../assets/imgsPrueba/icon_sequelize.png';

import iconLinkedin from '../assets/imgsPrueba/icon_Linkedin.png';
import iconTwitter from '../assets/imgsPrueba/icon_Twitter.png';
import iconGithub from '../assets/imgsPrueba/icon_github.png';

// * config axios
const request = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});
const config = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000'
  }
};

// ! obligatorio tipar el estado global
interface State {
  detail: Mentor | any;
  ArrayMentors: Api;
  FilterMentors: Api;
  specialty: Specialty[];
}

// ! obligatorio tipar los Actions
interface Actions {
  getSpecialty: () => Promise<void>;
  upgradeDetail: (Data: Mentor) => void;
  initialDetail: () => void;
  filterMentors: (type: string, option: string) => void;
  filterMentorNormal: () => void;
}

const stateGlobal = create<State & Actions>((set) => ({
  // ~ State Global
  detail: {},
  ArrayMentors: [
    {
      img: imgPrueba,
      cargo: 'Web Developer',
      nombre: 'Cristian Velarde',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
    },
    {
      img: imgDuvan,
      cargo: 'Web Developer',
      nombre: 'Duvan Rozo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      rating: 4,
    },
    {
      img: undefined,
      cargo: 'Web Developer',
      nombre: 'Isaias Romero',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      rating: 3,
    },
    {
      img: undefined,
      cargo: 'Web Developer',
      nombre: 'Richard Diaz',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      rating: 2,
    },
    {
      img: undefined,
      cargo: 'Web Developer',
      nombre: 'Nasari Ladino',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      rating: 1,
    },
    {
      img: undefined,
      cargo: 'Web Developer',
      nombre: 'David Gallego',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      rating: 4,
    },
  ],
  FilterMentors: [],
  specialty: [],

  // * Actions
  getSpecialty: async () => {
    request
      .get('/users',config)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  },

  upgradeDetail: (Data: Mentor) => set({ detail: Data }),

  filterMentors: (type: string, option: string) => {
    if (type === 'Rating') {
      if (option === 'Mayor a menor') {
        console.log(type, option);

        set((state) => ({
          FilterMentors: [...state.ArrayMentors].sort(
            (mentorA, mentorB) => mentorB.rating - mentorA.rating
          ),
        }));
      } else if (option === 'Menor a mayor') {
        console.log(type, option);

        set((state) => ({
          FilterMentors: [...state.ArrayMentors].sort(
            (mentorA, mentorB) => mentorA.rating - mentorB.rating
          ),
        }));
      }
    }

    if (type === 'Lenguaje') {
      set((state) => ({
        FilterMentors: [...state.ArrayMentors].filter((mentor) =>
          mentor.expert.some((expert) => expert.nombre === option)
        ),
      }));
    }
  },
  filterMentorNormal: () =>
    set((state) => ({ FilterMentors: state.ArrayMentors })),
  initialDetail: () => set((state) => ({ detail: state.ArrayMentors[0] })),
}));

export default stateGlobal;
