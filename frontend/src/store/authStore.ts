import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
  isAthenticated: boolean;
  gmail: string;
  id: string;
  rol: string;
  botones: string[];
}

export interface ActionsAuthState {
  setIsAuthenticated: (
    verify: boolean,
    gmail?: string,
    id?: string,
    rol?: string
  ) => void;
}

const useAuthStore = create(
  persist<AuthState & ActionsAuthState>(
    (set) => ({
      // * GLOBAL STATE AUTHENTICATION
      isAthenticated: false,
      gmail: '',
      id: '',
      rol: '',
      botones: [],

      // * ACTIONS GLOBAL STATE AUTHENTICATION
      setIsAuthenticated: (
        verify: boolean,
        gmail?: string,
        id?: string,
        rol?: string
      ) => {
        let botones;
        if (rol === 'super admin' || rol === 'admin')
          botones = ['mentors', 'buckets', 'dashboard', 'payments'];
        else botones = ['mentors', 'buckets', 'payments'];

        if (verify) set({ isAthenticated: false, gmail, id, rol, botones });
        else
          set({
            isAthenticated: false,
            gmail: '',
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
