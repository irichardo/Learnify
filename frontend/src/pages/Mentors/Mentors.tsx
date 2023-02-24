import './Mentors.css';
import DetailMentor from '../../components/DetailMentor/DetailMentor';
import CardsListMentors from '../../components/CardsListMentors/CardsListMentors';

import { useEffect, useState } from 'react';
import stateGlobal from '../../store';
import NotFound from '../others/NotFound';

const Mentors = () => {
  const { detail, FilterMentors } = stateGlobal((state) => state);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    if (FilterMentors?.length > 0) setIsLoading(false);
  }, [detail, FilterMentors]);

  if (isLoading) return <NotFound />;

  return (
    <section className='containerMentors'>
      <DetailMentor firstPosition={detail} />
      <CardsListMentors Mentors={FilterMentors} />
    </section>
  );
};

export default Mentors;
