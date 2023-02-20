import './Mentors.css';
import DetailMentor from '../../components/DetailMentor/DetailMentor';
import CardsListMentors from '../../components/CardsListMentors/CardsListMentors';

const Mentors = () => {
  return (
    <section className='containerMentors'>
      <DetailMentor />
      <CardsListMentors />
    </section>
  );
};

export default Mentors;
