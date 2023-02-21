export type Data = {
  imgs: string;
  nombre: string;
};

export type Confing = Data[];

export type Mentor = {
  img: string | undefined;
  cargo: string;
  nombre: string;
  description: string;
  expert: Confing;
  redes: Confing;
  rating: number;
};

export type Api = Mentor[];

export type CardsList = {
  img: string;
  cargo: string;
  nombre: string;
};
export type Specialty = {
  _id: string;
  name: string;
  icon: string;
  __v: number;
};
