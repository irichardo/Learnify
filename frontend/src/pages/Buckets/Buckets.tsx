// ~ css
import './Buckets.css';

// & imagenes
import luna from '../../assets/imgs/luna.png';
import predeterminate from '../../assets/imgsPrueba/predeterminateBucket.webp';

// ^ Hooks
import { useEffect, useState } from 'react';
import stateBucket from '../../store/Buckets';

// * ATN
import { Tooltip } from 'antd';

// * COMPONENTS
import TableData from '../../components/TableData/TableData';
import WindowsBucket from '../../components/windowsBucket/windowsBucket';

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
  const { topBuckets, bucketsActive, showBuckets, dataWindows, showWindows } =
    stateBucket((state) => state);

  const arrayData = bucketsActive.map((bucket: Bucket) => ({
    id: bucket._id,
    img: predeterminate,
    title: bucket.nombre,
    points: bucket.tokensActuales,
    userFollow: Number(bucket.usuarios.length),
  }));

  const actionBucket = (nombre: string, id: string) => {
    dataWindows(nombre, id);
    showWindows(true);
  };

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
        <TableData arrayData={arrayData} action={actionBucket} />
      </section>
      {showBuckets && <WindowsBucket />}
    </section>
  );
}
