import './Navbar.css';
import icon from '../../assets/icons/logo_icon.png';
import iconSign from '../../assets/icons/signin-up_icon.png';
import { Outlet } from 'react-router-dom';
export default function Navbar() {
  const options = ['mentores', 'buckets'];
  return (
    <>
      <nav className='containerNavbar'>
        <img id='logo' src={icon} alt='logo Learnify' />
        <div className='containerOptions'>
          {options.map((option: string) => (
            <div className='options'>{option}</div>
          ))}
        </div>
        <div className='sign'>
          <img src={iconSign} alt='icon Sing' />
          Sign In/Up
        </div>
      </nav>

      <Outlet />
      {/* ^ aca le digo donde debe renderizar los hijos  */}
    </>
  );
}
