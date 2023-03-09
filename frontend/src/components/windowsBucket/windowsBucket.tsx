import { Slider } from 'antd';
import UserStore from '../../store/userStore';
import { useState } from 'react';
import stateBucket, { request, config } from '../../store/Buckets';
import './windowsBucket.css';
import Progresive from '../Progress/Progresive';

function WindowsBucket() {
  const { tokens } = UserStore((state) => state);
  const { showWindows, initialGetBuckets, dataBuckets } = stateBucket(
    (state) => state
  );
  const [value, setValue] = useState<number>(0);
  const [show, isShow] = useState<Boolean>(false);
  const { nombre, id } = dataBuckets;

  const PeticionPut = async () => {
    try {
      isShow(true);
      const followBucket = await request.put(
        '/buckets/follow',
        {
          nombre,
          usuario: {
            _id: id,
            aportes: Number(value),
          },
        },
        config
      );
      await initialGetBuckets();
      alert(followBucket.data);
    } catch (error: any) {
      alert(error.response.data.error);
    } finally {
      isShow(false);
      showWindows(false);
    }
  };

  const handleSliderChange = (value: number) => {
    setValue(value);
  };

  const closeWindows = () => {
    showWindows(false);
  };

  return (
    <section className='windowsBucket'>
      <section className='showWindowsBucket'>
        <h1>nombre: {nombre}</h1>
        <h1>tokens: {value}</h1>
        <Slider onChange={handleSliderChange} min={0} max={tokens} />
        <button onClick={PeticionPut}>Enviar</button>
        <button onClick={closeWindows}>Cancelar</button>
      </section>
      {show && <Progresive />}
    </section>
  );
}

export default WindowsBucket;
