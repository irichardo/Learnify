import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// * config axios
export const request = axios.create({
  baseURL: 'http://localhost:3030',
  withCredentials: true,
});
export const config = {
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
  },
};

export interface AuthState {
  isAthenticated: boolean;
  id: string;
  rol: string;
  botones: string[];
}

export interface ActionsAuthState {
  setIsAuthenticated: (verify: boolean, gmail?: string) => void;
}

const useAuthStore = create(
  persist<AuthState & ActionsAuthState>(
    (set) => ({
      // * GLOBAL STATE AUTHENTICATION
      isAthenticated: false,
      id: '',
      rol: '',
      botones: [],

      // * ACTIONS GLOBAL STATE AUTHENTICATION
      setIsAuthenticated: async (verify: boolean, gmail?: string) => {
        if (verify) {
          const userByGmail = await request.get(
            `/users?email=${gmail}`,
            config
          );
          const { type, _id, active } = userByGmail.data;
          console.log('💻 -> setIsAuthenticated: -> userByGmail.data:', userByGmail.data);

          let botones =
            type === 'super admin' || type === 'admin'
              ? ['mentors', 'buckets', 'dashboard', 'payments']
              : ['mentors', 'buckets', 'payments'];

          set({ isAthenticated: active, id: _id, rol: type, botones });
        } else
          set({
            isAthenticated: false,
            id: '',
            rol: '',
            botones: [''],
          });
      },
    }),
    {
      name: 'auth',
      version: 1,
    }
  )
);

export default useAuthStore;
