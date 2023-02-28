import Buckets from '../../pages/Buckets/Buckets';

export type ExpertRedes = {
  imgs: string;
  nombre: string;
};

export type Mentor = {
  img: string | undefined;
  cargo: string;
  nombre: string;
  description: string;
  expert: ExpertRedes[];
  redes: ExpertRedes[];
  rating: number;
};

type Buckets = {
  bucketName: string;
  aportes: number;
};

export interface UserApi {
  _id: string;
  user: string;
  name: string;
  provider: string;
  email: string;
  date: string;
  picture: string;
  type: string;
  tokens: 160;
  active: true;
  buckets: Buckets[];
}

export type CardsList = {
  img: string;
  cargo: string;
  nombre: string;
};
export interface Specialty {
  _id: string;
  name: string;
  icon: string;
  __v: number;
}

export interface Preview {
  id: string;
  status: boolean;
  img: string;
  nombre: string;
  permisos: string;
}
