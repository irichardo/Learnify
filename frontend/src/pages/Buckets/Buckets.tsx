// ~ css
import './Buckets.css';

// & imagenes
import python from '../../assets/icons/iconPruebaPython.png';
import java from '../../assets/icons/iconPruebaJava.png';
import Go from '../../assets/icons/iconPruebaGo.png';
import arrow from '../../assets/icons/iconArrow.png';
import luna from '../../assets/imgs/luna.png';
import predeterminate from '../../assets/imgsPrueba/predeterminateBucket.webp';

// ^ Hooks
import { useEffect, useState } from 'react';
import stateBucket from '../../store/Buckets';

// * ATN
import { Tooltip } from 'antd';

type Usuario = {
  aportes: number;
  _id: string;
};

interface Bucket {
  activo: boolean;
  nombre: string;
  tokensActuales: number;
  usuarios: Usuario[];
  __v: number;
  _id: string;
}

export default function Buckets() {
  const { listBuckets, topBuckets, bucketsActive, initialGetBuckets } =
    stateBucket((state) => state);

  // const hanldeOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setOption(event.currentTarget.value);
  // };

  useEffect(() => {
    initialGetBuckets();
  }, []);

  return (
    <section className='containerBuckets'>
      <img id='luna' src={luna} alt='luna' />
      <section className='containerPosition'>
        {topBuckets.map((element: Bucket, index: number) => (
          <Tooltip
            placement='topLeft'
            title={`Nombre: ${element.nombre} - Aportes: ${element.tokensActuales} Tokens`}
          >
            <div key={index} className={`position${index + 1}`}>
              <img src={predeterminate} alt={element.nombre} />
            </div>
          </Tooltip>
        ))}
      </section>
      <section className='containerStats'>
        <section className='tableBuckets'>
          <nav>
            <h1 id='Points'>Points</h1>
          </nav>
          <div className='containerDetail2'>
            {bucketsActive.map((element: Bucket, index: number) => (
              <div className='cardBucket' key={index}>
                <div className='cardImg'>
                  <img src={predeterminate} alt={element.nombre} />
                </div>
                <p> Nombre: {element.nombre}</p>
                <p>Tokens: {element.tokensActuales}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
}
