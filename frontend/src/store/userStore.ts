import { create } from 'zustand';

type UserState = {
  user: any; // Proper type for the object obtained from useAuth0
  setUser: (user: any) => void; // Function that updates the status
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;
