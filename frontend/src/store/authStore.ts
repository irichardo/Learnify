import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type AuthState = {
  isAthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

interface CustomPersistOptions<T> extends PersistOptions<T> {
  whitelist?: Array<keyof T>;
}

const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAthenticated: value }),
    }),
    {
      name: 'auth',
      version: 1,
    }
  )
);

export default useAuthStore;
