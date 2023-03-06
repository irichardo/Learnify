import './Navbar.css';
import icon from '../../assets/icons/logo_icon.png';

// * Hooks
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

// & components
import Login from '../SignIn-Up/Login';
import Logout from '../SignIn-Up/Logout';

// ~ state global authentication
import useAuthStore from '../../store/authStore';
import type { AuthState, ActionsAuthState } from '../../store/authStore';

export default function Navbar() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const { setIsAuthenticated, botones } = useAuthStore();
  const handleLogin = () => loginWithRedirect();

  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/mentors');
      setIsAuthenticated(true, user?.email);
    }
  }, [isAuthenticated]);

  return (
    <>
      <nav className='containerNavbar'>
        <Link to='/'>
          <img id='logo' src={icon} alt='logo Learnify' />
        </Link>
        <div className='containerOptions'>
          {botones.map((option: string) => (
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
