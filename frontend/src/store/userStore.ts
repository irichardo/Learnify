import { create } from 'zustand';

type User = {
  name: string;
  email: string;
};

type UserState = {
  _user: User | null;
  set_User: (_user: User | null) => void;
};

const useUserStore = create<UserState>((set) => ({
  _user: null,
  set_User: (_user) => set(() => ({ _user })),
}));

export default useUserStore;
