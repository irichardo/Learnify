import './Navbar.css';
import icon from '../../assets/icons/logo_icon.png';
import iconSign from '../../assets/icons/signin-up_icon.png';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import useAuthStore from '../../store/authStore';
import { useEffect } from 'react';

export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const options = ['mentors', 'buckets'];

  const { setIsAuthenticated } = useAuthStore();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (isAuthenticated) navigate('/mentors');
  }, [isAuthenticated]);

  return (
    <>
      <nav className='containerNavbar'>
        <Link to='/'>
          <img id='logo' src={icon} alt='logo Learnify' />
        </Link>
        <div className='containerOptions'>
          {options.map((option: string, index: number) => (
            <div key={option} className='options'>
              <Link to={`/${option}`}>{option}</Link>
            </div>
          ))}
        </div>

        <button
          className='sign'
          onClick={isAuthenticated ? handleLogout : handleLogin}
        >
          <img src={iconSign} alt='icon Sing' />
          {isAuthenticated ? 'Sign Out' : 'Sign In/Up'}
        </button>
      </nav>

      <Outlet />
    </>
  );
}
