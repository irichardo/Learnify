import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

type Props = {
  handleLogout: () => void;
};

const Logout: React.FC<Props> = ({ handleLogout }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setIsMenuVisible(false);
  };

  const handleProfileClick = () => {
    setIsMenuVisible(false);
    navigate('/profile');
  };

  return (
    <div className='relative'>
      <button
        onClick={handleMenuToggle}
        className='flex items-center space-x-2 rounded-full text-sm text-center text-customBlue py-1'
        style={{
          fontFamily: 'Montserrat-Regular',
          fontWeight: 'bold',
          backgroundColor: 'rgba(255, 254, 254, 0.15)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.07)',
        }}
      >
        <span className='mdi mdi-account mdi-18px mdi-inactive pl-3' />
        <span className='mdi mdi-chevron-down mdi-18px mdi-inactive pr-3' />
      </button>
      {isMenuVisible && (
        <div
          ref={menuRef}
          className='absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10'
        >
          <div className='py-1'>
            <button
              onClick={handleProfileClick}
              className='block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-gray-200 w-full text-left'
            >
              Profile
            </button>
            <button
              onClick={handleLogoutClick}
              className='block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-gray-200 w-full text-left'
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
