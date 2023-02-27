import { create } from 'zustand';
import axios from 'axios';
import { ArrayGetKeysEspecific } from '../helpers/functionReactives';
import { User } from '@auth0/auth0-react';
import { Preview, UserApi } from '../helpers/Types/Cards';

// * config axios
const request = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});
const config = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
};

// ! obligatorio tipar el estado global
interface State {
  allUser: UserApi[];
  detail: UserApi | {};
  ArrayMentors: UserApi[];
  mentorFilter: UserApi[];
  preview: Preview | {};
  specialty: any[];
}

// ! obligatorio tipar los Actions
interface Actions {
  initialApp: () => void;
  upgradeDetail: (Data: UserApi) => void;
  filterMentors: (type: string, option: string) => void;
  upgradePreview: (img: string, nombre: string, permisos: string) => void;
}

const stateGlobal = create<State & Actions>((set) => ({
  // ~ State Global
  detail: {},
  preview: {},
  allUser: [],
  specialty: [],
  ArrayMentors: [],
  mentorFilter: [],

  // * Actions

  initialApp: async () => {
    try {
      const Specialty = await request.get('/specialty', config);
      const User = await request.get('/users', config);
      const Mentors = await request.get('/users/teacher', config);
      const specialtyName = ArrayGetKeysEspecific(Specialty.data);

      set({
        allUser: User.data,
        detail: Mentors.data[0],
        specialty: specialtyName,
        ArrayMentors: Mentors.data,
        mentorFilter: Mentors.data,
      });
    } catch (error) {
      console.log(error);
    }
  },

  upgradeDetail: (Data: UserApi) => set({ detail: Data }),
  upgradePreview: (img: string, nombre: string, permisos: string) => {
    set({
      preview: {
        img,
        nombre,
        permisos,
      },
    });
  },

  filterMentors: (type: string, option: string) => {
    // if (type === 'Rating') {
    //   if (option === 'Mayor a menor') {
    //     set((state) => ({
    //       mentorFilter: [...state.ArrayMentors].sort(
    //         (mentorA, mentorB) => mentorB.rating - mentorA.rating
    //       ),
    //     }));
    //   } else if (option === 'Menor a mayor') {
    //     set((state) => ({
    //       mentorFilter: [...state.ArrayMentors].sort(
    //         (mentorA, mentorB) => mentorA.rating - mentorB.rating
    //       ),
    //     }));
    //   }
    // }

    // if (type === 'Lenguaje') {
    //   set((state) => ({
    //     mentorFilter: [...state.ArrayMentors].filter((mentor) =>
    //       mentor.expert.some((expert) => expert.nombre === option)
    //     ),
    //   }));
    // }
  },
}));

export default stateGlobal;
