import { create } from 'zustand';

type AuthState = {
  isAthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAthenticated: false,
  setIsAuthenticated: (value) => set({ isAthenticated: value }),
}));

export default useAuthStore;
