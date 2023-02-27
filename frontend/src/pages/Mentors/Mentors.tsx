import './Mentors.css';
import DetailMentor from '../../components/DetailMentor/DetailMentor';
import CardsListMentors from '../../components/CardsListMentors/CardsListMentors';

import { useEffect, useState } from 'react';
import stateGlobal from '../../store';
import NotFound from '../others/NotFound';
import { Mentor, Specialty, UserApi } from '../../helpers/Types/Cards';

const Mentors = () => {
  const { mentorFilter, specialty, detail } = stateGlobal(
    (state) => state
  ) as unknown as {
    mentorFilter: UserApi[];
    specialty: Specialty[];
    detail: UserApi;
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      mentorFilter?.length > 0 &&
      specialty?.length > 0 &&
      Object.keys(detail).length > 0
    ) {
      setIsLoading(false);
    }
  }, [mentorFilter, specialty, detail]);

  if (isLoading) return <NotFound />;

  return (
    <section className='containerMentors'>
      <DetailMentor dataMentor={detail} />
      <CardsListMentors Mentors={mentorFilter} />
    </section>
  );
};

export default Mentors;
