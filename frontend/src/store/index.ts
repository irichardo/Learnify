import { create } from 'zustand';
import axios from 'axios';
import { ArrayGetKeysEspecific } from '../helpers/functionReactives';
import { User } from '@auth0/auth0-react';
import { Preview, UserApi } from '../helpers/Types/Cards';

// * config axios
const request = axios.create({
  baseURL: 'https://learnify-blue.vercel.app',
  withCredentials: true,
});
const config = {
  headers: {
    'Access-Control-Allow-Origin': 'learnify-86vs-git-development-irichardo.vercel.app',
  },
};

// ! obligatorio tipar el estado global
export interface State {
  showWindows: boolean;
  allUser: UserApi[];
  detail: UserApi | {};
  ArrayMentors: UserApi[];
  preview: Preview;
  specialty: string[];
}

// ! obligatorio tipar los Actions
export interface Actions {
  initialApp: () => void;
  setShowWindows: (data: boolean) => void;
  upgradeDetail: (Data: UserApi) => void;
  upgradeDetailApi: (id: string) => void;
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
  preview: {
    id: '',
    status: false,
    img: '',
    nombre: '',
    permisos: '',
  },
  allUser: [],
  specialty: [],
  ArrayMentors: [],
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
      });
    } catch (error) {
      console.log(error);
    }
  },
  upgradeDetailApi: async (id: string) => {
    try {
      const getUser = await request.get(`users?id=${id}`)
      set({
        detail: getUser.data,
      })
    } catch (error) {
      
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
