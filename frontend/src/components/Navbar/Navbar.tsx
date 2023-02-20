import './Navbar.css';
import icon from '../../assets/icons/logo_icon.png';
import iconSign from '../../assets/icons/signin-up_icon.png';
import { Outlet, Link } from 'react-router-dom';

export default function Navbar() {
  const options = ['mentors', 'buckets'];
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
        <Link className='sign' to='/login'>
          <img src={iconSign} alt='icon Sing' />
          Sign In/Up
        </Link>
      </nav>

      <Outlet />
      {/* ^^^^^ aca le digo donde debe renderizar los hijos  */}
    </>
  );
}
