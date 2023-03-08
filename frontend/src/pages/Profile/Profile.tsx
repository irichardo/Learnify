import useAuthStore from '../../store/authStore';
import { request, config } from '../../store/authStore';
import React, { createRef, useEffect, useRef, useState } from 'react';

import './Profile.css';
import Loading from '../../components/Loader/Cargando';
import { Slider, Card, Input, Space } from 'antd';
import { InputRef } from 'antd/lib/input/Input';

interface InputsUpdate {
  [key: string]: string; // Anotación de tipo para el objeto inputsUpdate
}

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const Profile = () => {
  const inputRef = createRef<InputRef>();
  const [value, setValue] = useState<number>(0);
  const [state, setState] = useState({
    img: '',
    name: '',
    email: '',
    buckets: [],
    tokens: 0,
  });
  const [inputsUpdate, setInputsUpdate] = useState<InputsUpdate>({});

  const { id } = useAuthStore((state) => state);

  useEffect(() => {
    const detailUser = async () => {
      const user = await request.get(`/users?id=${id}`);
      const { picture, name, email, buckets, tokens, social } = user.data;
      console.log('💻 -> detailUser -> social:', social);
      setInputsUpdate(social);
      setState({
        img: picture,
        name,
        email,
        buckets,
        tokens,
      });
    };

    id?.length && detailUser();
  }, []);

  if (state?.email?.length === 0) return <Loading />;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSubmitBuckets = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nombre = inputRef.current?.input?.value;

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

  const handleChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputsUpdate({
      ...inputsUpdate,
      [event.target.name]: event.currentTarget.value,
    });
  };

  const handleSliderChange = (value: number) => {
    setValue(value);
  };

  return (
    <section className='ContianerProfile'>
      <section className='profileInfo'>
        <div className='profileImg'>
          <img src={state.img} alt={state.name} />
          <label>Nombre: </label>
          <p>{state.name}</p>
          <label>Correo: </label>
          <p>{state.email}</p>
          <label>Tokens: </label>
          <p>{state.tokens}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            value={state.name}
            onChange={handleChange}
            placeholder='Ingrese su nuevo nombre de usuario'
          />
          {Object.keys(inputsUpdate).map((redSocial) => {
            return (
              <>
                <label>{redSocial}:</label>
                <input
                  type='text'
                  name={redSocial}
                  value={inputsUpdate[redSocial]}
                  onChange={handleChangeInputs}
                  placeholder={`ingrese la Url de ${redSocial}`}
                />
              </>
            );
          })}

          <button type='submit'>Actualizar Datos</button>
        </form>
      </section>

      <div className='profileBuckets'>
        <div className='buckets'>
          <Card
            style={{ width: '400px', height: '200px' }}
            title={`Buckets registrados. Cant.${state.buckets?.length}`}
          >
            {state.buckets.length &&
              state.buckets.map((element) => {
                const { bucketName, aportes } = element;
                return (
                  <Card.Grid style={gridStyle}>
                    {bucketName} - {aportes}
                  </Card.Grid>
                );
              })}
          </Card>
        </div>
        <form onSubmit={handleSubmitBuckets}>
          <label>nombre</label>
          <Space direction='vertical' style={{ width: '100%' }}>
            <Input status='' placeholder='Error' ref={inputRef} />
          </Space>
          <Slider
            defaultValue={0}
            onChange={handleSliderChange}
            min={0}
            max={state.tokens}
          />
          <button type='submit'>Peticion para nuevo bucket</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
