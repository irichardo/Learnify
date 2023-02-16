import './Landing.css';

import Navbar from '../../components/Navbar/Navbar';

import presentation from '../../assets/imgs/presentation.png';
import seeMore from '../../assets/icons/see_more.png';

export default function Lading() {
  return (
    <section className='containerLanding'>
      <Navbar />
      <div className='containerPresent'>
        <div className='containerImg'></div>
        <div className='containerInfo'>
          <h1>Learnify</h1>
          <p>
            Online mentoring: connection between mentors and students. Learning
            with experts. Improve your skills and connect with talented mentors.
          </p>
          <div className='containerButton'>
            <button>See More</button>
            <img src={seeMore} alt='icon' />
          </div>
        </div>
      </div>
    </section>
  );
}
