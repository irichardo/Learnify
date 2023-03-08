import { create } from 'zustand';
import { request, config } from './authStore';

type bucketsType = {
  bucketName: string;
  aportes: number;
};

type bucketsSocial = {
  [key: string]: string;
};

export interface UserState {
  buckets: bucketsType[];
  picture: string;
  social: bucketsSocial;
  tokens: number;
  name: string;
  email: string;
  // * Proper type for the object obtained from useAuth0
  getUser: (id: string) => void; // Function that updates the status
}

const UserStore = create<UserState>((set) => ({
  buckets: [],
  picture: '',
  social: {},
  tokens: 0,
  name: '',
  email: '',

  getUser: async (id: string) => {
    try {
      const userById = await request.get(`/users?id=${id}`, config);
      const { buckets, picture, social, tokens, name, email } = userById.data;
      set({
        buckets,
        picture,
        social,
        tokens,
        name,
        email,
      });
    } catch (error: any) {
      alert(error.response.data.error);
    }
  },
}));

export default UserStore;
