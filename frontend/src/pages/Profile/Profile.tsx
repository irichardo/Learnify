import useAuthStore from '../../store/authStore';
import { request, config } from '../../store/authStore';
import React, { createRef, useEffect, useRef, useState } from 'react';

import './Profile.css';
import Loading from '../../components/Loader/Cargando';
import { Slider, Card, Input, Space } from 'antd';
import { InputRef } from 'antd/lib/input/Input';

import Progresive from '../../components/Progress/Progresive';
import UserStore, { UserState } from '../../store/userStore';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

interface ObjetoKeys {
  [propiedad: string]: string | undefined;
}

const Profile = () => {
  // * REFERENCIAS
  const inputRef = createRef<InputRef>();
  const inputFormUser = useRef<HTMLInputElement>(null);
  const inputSocial = useRef<Array<HTMLInputElement | null>>([]);

  // ~ USESTATE
  const [value, setValue] = useState<number>(0);
  const [showProgress, setShowProgress] = useState(false);

  // & STATEGLOBAL
  const { id, rol } = useAuthStore((state) => state);
  const { buckets, picture, social, tokens, name, email, getUser } =
    UserStore<UserState>((state) => state);

  useEffect(() => {
    getUser(id);
  }, [id]);

  if (email?.length === 0) return <Loading />;

  // * UPDATE DATA USER
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const socials = inputSocial.current.map((ref) => ref?.value);
      const name = inputFormUser.current?.value;
      const dataSocial: ObjetoKeys = {};

      setShowProgress(true);

      Object.keys(social).forEach((propiedad, indice) => {
        dataSocial[propiedad] = socials[indice];
      });

      let dataPut = {
        _id: id,
        name: (name?.length ? name.length : 0) > 0 ? name : '',
        Address: '',
        City: '',
        Country: '',
        State: '',
        social: Object.values(dataSocial).length > 0 ? dataSocial : '',
      };

      const put = await request.put(`/users/profile`, dataPut, config);
      await getUser(id);
      alert(put.data);
    } catch (error: any) {
      alert(error.response.data.error);
    } finally {
      setShowProgress(false);
    }
  };

  // * CREATE NEW BUCKETS
  const handleSubmitBuckets = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      setShowProgress(true);

      const nombre = inputRef.current?.input?.value;
      const dataPost = {
        nombre,
        usuario: {
          _id: id,
          aportes: value,
        },
      };

      const post = await request.post(`/buckets`, dataPost, config);
      await getUser(id);
      alert(post.data);
    } catch (error: any) {
      alert(error.response.data.error);
    } finally {
      setShowProgress(false);
    }
  };

  // * DESUSCRIB OF A BUCKET
  const desuscribBucket = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      setShowProgress(true);

      const data = (event.target as HTMLButtonElement).value.split('-');
      const nombre = data[0];
      const tokens = Number(data[1]);

      const dataPut = {
        nombre,
        usuario: {
          _id: id,
          aportes: tokens,
        },
      };

      const put = await request.put(`/buckets/unfollow`, dataPut, config);
      await getUser(id);
      alert(put.data);
    } catch (error: any) {
      alert(error.response.data.error);
    } finally {
      setShowProgress(false);
    }
  };

  const handleSliderChange = (value: number) => {
    setValue(value);
  };
  // TODO: rol === 'teacher' &&
  return (
    <section className='ContianerProfile'>
      <section className='profileInfo'>
        <div className='profileImg'>
          <img src={picture} alt={name} />
          <label>Nombre: </label>
          <p>{name}</p>
          <label>Correo: </label>
          <p>{email}</p>
          <label>Tokens: </label>
          <p>{tokens}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            ref={inputFormUser}
            placeholder='Ingrese su nuevo nombre de usuario'
          />
          {Object.keys(social).map((redSocial, index) => {
            return (
              <section key={index}>
                <label>{redSocial}:</label>
                <input
                  type='text'
                  name={redSocial}
                  ref={(ref) => (inputSocial.current[index] = ref)}
                  placeholder={`ingrese la Url de ${redSocial}`}
                />
              </section>
            );
          })}

          <button type='submit'>Actualizar Datos</button>
        </form>
      </section>

      <div className='profileBuckets'>
        <div className='buckets'>
          <Card
            style={{ width: '400px', height: '200px', overflow: 'auto' }}
            title={`Buckets registrados. Cant.${buckets?.length}`}
          >
            {buckets.length &&
              buckets.map((element) => {
                const { bucketName, aportes } = element;
                return (
                  <Card.Grid key={bucketName} style={gridStyle}>
                    <button
                      value={`${bucketName}-${aportes}`}
                      onClick={desuscribBucket}
                      className='deleteBucket'
                    >
                      X
                    </button>
                    {bucketName} - {aportes}
                  </Card.Grid>
                );
              })}
          </Card>
        </div>
        <form onSubmit={handleSubmitBuckets}>
          <label>nombre</label>
          <Space direction='vertical' style={{ width: '100%' }}>
            <Input
              status=''
              placeholder='Ingrese nombre del bucket'
              ref={inputRef}
            />
          </Space>
          <Slider
            defaultValue={0}
            onChange={handleSliderChange}
            min={0}
            max={tokens}
          />
          <button type='submit'>Peticion para nuevo bucket</button>
        </form>
      </div>
      {showProgress && <Progresive />}
    </section>
  );
};

export default Profile;
