// ~ css
import './Buckets.css';

// & imagenes
import python from '../../assets/icons/iconPruebaPython.png';
import java from '../../assets/icons/iconPruebaJava.png';
import Go from '../../assets/icons/iconPruebaGo.png';
import arrow from '../../assets/icons/iconArrow.png';
import luna from '../../assets/imgs/luna.png';

// ^ Hooks
import { useState } from 'react';

type Bucket = {
  img: string;
  nombre: string;
  temas: string[];
  points: number;
  price: number;
};

const simulatorApi = [
  {
    img: python,
    nombre: 'Java',
    temas: ['spring', 'api rest', 'crud basic'],
    points: 120,
    price: 20,
  },
  {
    img: java,
    nombre: 'Go',
    temas: ['fiber', 'api rest', 'crud basic'],
    points: 120,
    price: 20,
  },
  {
    img: Go,
    nombre: 'Python',
    temas: ['big data', 'analitysc data'],
    points: 120,
    price: 20,
  },
];

export default function Buckets() {
  const [option, setOption] = useState('Points');
  const [position, setPosition] = useState(simulatorApi);

  const hanldeOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOption(event.currentTarget.value);
  };

  return (
    <section className='containerBuckets'>
      <img id='luna' src={luna} alt='luna' />
      <section className='containerPosition'>
        {simulatorApi.map((element: Bucket, index: number) => (
          <div key={index} className={`position${index + 1}`}>
            <img src={element.img} alt={element.nombre} />
          </div>
        ))}
      </section>
      <section className='containerStats'>
        <section className='table'>
          <nav>
            <button id='Points' value='Points' onClick={hanldeOptions}>
              Points
            </button>
            <button id='Price' value='Price' onClick={hanldeOptions}>
              Price
            </button>
          </nav>
          <div className='containerDetail'>
            {simulatorApi.map((element: Bucket, index: number) => (
              <div className='cardBucket' key={index}>
                <div className='cardImg'>
                  <img src={element.img} alt={element.nombre} />
                </div>
                <p>{option === 'Points' ? element.points : element.price}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
