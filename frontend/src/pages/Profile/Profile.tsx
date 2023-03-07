import { Formik, Form, Field, ErrorMessage } from 'formik';
import { valProfile } from '../../helpers/validation';
import default_logo from '../../assets/imgs/profile-img-default.png';

import useAuthStore from '../../store/authStore';
import { request, config } from '../../store/authStore';
import React, { useEffect, useRef, useState } from 'react';

import './Profile.css';
import Loading from '../../components/Loader/Cargando';
import { Slider } from 'antd';
import { AxiosError } from 'axios';

const Profile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<number>(0);
  const [state, setState] = useState({
    img: '',
    name: '',
    email: '',
    buckets: [],
    tokens: 0,
  });
  const { id } = useAuthStore((state) => state);
  useEffect(() => {
    const detailUser = async () => {
      const user = await request.get(`/users?id=${id}`);
      const { picture, name, email, buckets, tokens } = user.data;

      setState({
        img: picture,
        name,
        email,
        buckets,
        tokens,
      });
    };

    id?.length && detailUser();
  }, [id]);

  if (state?.email?.length === 0) return <Loading />;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSubmitBuckets = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nombre = inputRef.current?.value;

    request
      .post(
        `/buckets`,
        {
          nombre,
          usuario: {
            _id: id,
            aportes: value,
          },
        },
        config
      )
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSliderChange = (value: number) => {
    setValue(value);
  };

  return (
    <section className='ContianerProfile'>
      <div className='profileImg'>
        <img src={state.img} alt={state.name} />
        <label>Nombre: {state.name}</label>
        <label>Correo: {state.email}</label>
        <label>Tokens: {state.tokens}</label>
        <label>Cant. Buckets: {state.buckets?.length}</label>
      </div>
      <div className='info'>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={handleChange}
            placeholder='Ingrese su nuevo nombre de usuario'
          />
          <label>Correo:</label>
          <input
            type='text'
            value={state.email}
            placeholder='No se puede cambiar el correo'
          />
          <button type='submit'>Actualizar Datos</button>
        </form>
        <div className='buckets'>
          {state.buckets.length &&
            state.buckets.map((element) => {
              const { bucketName, aportes } = element;
              return (
                <div>
                  <h1>Nombre: {bucketName}</h1>
                  <h1>aporte: {aportes}</h1>
                </div>
              );
            })}
        </div>
        <section className='containerBucketsProfile'>
          <form onSubmit={handleSubmitBuckets}>
            <h1>Buckets</h1>
            <label>nombre</label>
            <input
              ref={inputRef}
              name='nameBucket'
              type='text'
              placeholder='Nombre del buckets'
            />
            <label>Aporte:</label>
            <Slider
              defaultValue={0}
              value={value}
              onChange={handleSliderChange}
              tooltip={{ open: true }}
              min={0}
              max={state.tokens}
            />
            <button type='submit'>Peticion para nuevo bucket</button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Profile;
