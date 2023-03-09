import axios from 'axios';
import { create } from 'zustand';

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

interface typeBucket {
  listBuckets: [];
  bucketsActive: [];
  bucketsInactive: [];
  topBuckets: [];
}

interface actionBucket {
  initialGetBuckets: () => void;
}

interface Buckets {
  activo: boolean;
  nombre: string;
  tokensActuales: number;
  usuarios: [];
  __v: number;
  _id: string;
}

const stateBucket = create<typeBucket & actionBucket>((set) => ({
  listBuckets: [],
  bucketsActive: [],
  bucketsInactive: [],
  topBuckets: [],

  initialGetBuckets: async () => {
    try {
      const allBuckets = await request.get('/buckets', config);
      const getBucketsActive = await request.get(
        '/buckets?type=activo',
        config
      );
      const getBucketsInactive = await request.get(
        '/buckets?type=inactivo',
        config
      );

      // & Ordenamos el array en orden descendente según la propiedad "puntos"
      const datosOrdenados = getBucketsActive.data.sort(
        (a: { tokensActuales: number }, b: { tokensActuales: number }) =>
          b.tokensActuales - a.tokensActuales
      );
      // & Obtenemos los primeros tres elementos del array ordenado
      const topThree = datosOrdenados.slice(0, 3);

      set({
        listBuckets: allBuckets.data,
        bucketsActive: getBucketsActive.data,
        bucketsInactive: getBucketsInactive.data,
        topBuckets: topThree,
      });
    } catch (error: any) {
      alert(error.response.data.error);
    }
  },
}));

export default stateBucket;
