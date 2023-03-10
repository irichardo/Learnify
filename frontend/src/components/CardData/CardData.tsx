import './CardData.css';

type Data = {
  imgs: string;
  nombre: string;
};

interface PropsExpert {
  arrayExpert: Data[];
  title: string;
}

export default function CardData({ arrayExpert, title }: PropsExpert) {
  return (
    <>
      <p>{title}</p>
      <div className='cardData'>
        {arrayExpert.map((Lenguaje: Data) => (
          <div key={Lenguaje.nombre} className='Lenguaje'>
            <img src={Lenguaje.imgs} alt={Lenguaje.nombre} />
          </div>
        ))}
      </div>
    </>
  );
}
