import './Navbar.css';
import icon from '../../assets/icons/logo_icon.png';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import useAuthStore from '../../store/authStore';
import { useEffect } from 'react';
import Login from '../SignIn-Up/Login';
import Logout from '../SignIn-Up/Logout';

export default function Navbar() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const options = ['mentors', 'buckets', 'dashboard', 'payments'];

  const { setIsAuthenticated } = useAuthStore();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  console.log('💻 -> useEffect -> isAuthenticated:', isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) navigate('/mentors');

    console.log(user);
  }, [isAuthenticated]);

  return (
    <>
      <nav className='containerNavbar'>
        <Link to='/'>
          <img id='logo' src={icon} alt='logo Learnify' />
        </Link>
        <div className='containerOptions'>
          {options.map((option: string) => (
            <div key={option} className='options'>
              <Link to={`/${option}`}>{option}</Link>
            </div>
          ))}
        </div>

        {isAuthenticated ? (
          <Logout handleLogout={handleLogout} />
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </nav>

      <Outlet />
    </>
  );
}
