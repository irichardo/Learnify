import { create } from 'zustand';

// ! obligatorio tipar el estado global
interface State {
  token: string;
  rol: string;
}

// ! obligatorio tipar los Actions
interface Actions {
  verifyToken: () => void;
}

const stateGlobal = create<State | Actions>((set) => ({
  // ~ State Global
  token: '',
  rol: '',

  // * Actions
  verifyToken: (token: string) => console.log(token),
}));

export default stateGlobal;
// ya solo es exportar en stateGlobal y acceder a sus state o actions
/**import stateGlobal from 'store/index.ts
 * const state = stateGlobal((state) => state.token)
 * const action = stateGlobal((state) => state.verifiToken)
 */
