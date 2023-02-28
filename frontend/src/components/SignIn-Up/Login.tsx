import React from 'react';

type Props = {
  handleLogin: () => void;
};

const Login: React.FC<Props> = ({ handleLogin }) => {
  return (
    <button
      onClick={handleLogin}
      className='flex justify-center items-center w-28 h-7 rounded-full text-sm text-center text-customBlue'
      style={{
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 254, 254, 0.15)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.07)',
      }}
    >
      <span className='mdi mdi-arrow-right-bold-circle-outline mdi-18px mdi-inactive pr-2'>
        Sign In-Up
      </span>
    </button>
  );
};

export default Login;
