import { Slider } from 'antd';
import UserStore from '../../store/userStore';
import { useState } from 'react';
import stateBucket, { request, config } from '../../store/Buckets';
import './windowsBucket.css';

function WindowsBucket() {
  const { tokens } = UserStore((state) => state);
  console.log('💻 -> WindowsBucket -> tokens:', tokens);
  const { showWindows, dataBuckets } = stateBucket((state) => state);
  const { nombre, id } = dataBuckets;
  const [value, setValue] = useState<number>(0);

  const PeticionPut = async () => {
    try {
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
      alert(followBucket.data);
      showWindows(false);
    } catch (error: any) {
      alert(error.response.data.error);
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
    </section>
  );
}

export default WindowsBucket;
