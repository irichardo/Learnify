import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ! obligatorio tipar el estado global
interface State {
  token: string;
  rol: string;
}

// ! obligatorio tipar los Actions
interface Actions {
  verifyToken: (token: string) => void;
}

const stateGlobal = create(
  persist<State & Actions>(
    (set) => ({
      // ~ State Global
      token: '',
      rol: '',

      // * Actions
      verifyToken: (token: string) => console.log(token),
    }),
    {
      name: 'stateGlobal',
    }
  )
);

export default stateGlobal;
// ya solo es exportar en stateGlobal y acceder a sus state o actions
/**import stateGlobal from 'store/index.ts
 * const state = stateGlobal((state) => state.token)
 * const action = stateGlobal((state) => state.verifiToken)
 */
