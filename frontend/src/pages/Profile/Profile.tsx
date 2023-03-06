import { Formik, Form, Field, ErrorMessage } from 'formik';
import { valProfile } from '../../helpers/validation';
import default_logo from '../../assets/imgs/profile-img-default.png';

import useAuthStore from '../../store/authStore';
import { request, config } from '../../store/authStore';
import { useEffect, useState } from 'react';

import './Profile.css';
import Loading from '../../components/Loader/Cargando';

const Profile = () => {
  const [state, setState] = useState({
    img: '',
    name: '',
    email: '',
  });
  const { id } = useAuthStore((state) => state);
  useEffect(() => {
    const detailUser = async () => {
      const user = await request.get(`/users?id=${id}`);
      const { picture, name, email } = user.data;
      console.log('💻 -> detailUser -> user.data:', user.data);

      setState({
        img: picture,
        name,
        email,
      });
    };

    id && detailUser();
  }, [id]);

  if (state?.email?.length === 0) return <Loading />;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <section className='ContianerProfile'>
      <div className='profileImg'>
        <img src={state.img} alt={state.name} />
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
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
