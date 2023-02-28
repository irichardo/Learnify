import { create } from 'zustand';
import axios from 'axios';
import { ArrayGetKeysEspecific } from '../helpers/functionReactives';
import { User } from '@auth0/auth0-react';
import { Preview, UserApi } from '../helpers/Types/Cards';

// * config axios
const request = axios.create({
  baseURL: 'https://learnify-blue.vercel.app',
  //https://learnify-blue.vercel.app/users
  withCredentials: true,
});
const config = {
  headers: {
    'Access-Control-Allow-Origin': 'https://learnify-86vs.vercel.app/',
  },
};

// ! obligatorio tipar el estado global
interface State {
  showWindows: boolean;
  allUser: UserApi[];
  detail: UserApi | {};
  ArrayMentors: UserApi[];
  mentorFilter: UserApi[];
  preview: Preview | {};
  specialty: string[];
}

// ! obligatorio tipar los Actions
interface Actions {
  initialApp: () => void;
  setShowWindows: (data: boolean) => void;
  upgradeDetail: (Data: UserApi) => void;
  filterMentors: (type: string, option: string) => void;
  upgradePreview: (
    id: string,
    img: string,
    status: boolean,
    nombre: string,
    permisos: string
  ) => void;
  getDetailShowWindows: (id: string, type: string) => void;
  putStateUserShow: (id: string) => void;
}

const stateGlobal = create<State & Actions>((set) => ({
  // ~ State Global
  detail: {},
  preview: {},
  allUser: [],
  specialty: [],
  ArrayMentors: [],
  mentorFilter: [],
  showWindows: false,

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
  setShowWindows: (data: boolean) => set({ showWindows: data }),
  upgradeDetail: (Data: UserApi) => set({ detail: Data }),
  upgradePreview: (
    id: string,
    img: string,
    status: boolean,
    nombre: string,
    permisos: string
  ) => {
    set({
      preview: {
        id,
        status,
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
  getDetailShowWindows: async (id: string, type: string, active?: string) => {
    const data = {
      _id: id,
      type: type,
    };
    const putUser = await request.put('/users', data, config);
    const getUser = await request.get('/users', config);

    alert(putUser.data);
    set({
      preview: putUser.data,
      allUser: getUser.data,
    });
  },
  putStateUserShow: async (id: string) => {
    const data = {
      _id: id,
      active: 'change',
    };
    const putUserState = await request.put('/users', data, config);
    const getUser = await request.get('/users', config);

    alert(putUserState.data);
    set({
      preview: putUserState.data,
      allUser: getUser.data,
    });
  },
}));

export default stateGlobal;
