import start from '../../assets/imgsPrueba/icon_start.png';
import './CardStar.css';

type PropsStar = {
  rating: number;
};

export default function CardStar({ rating }: PropsStar) {
  const calification: number[] = [];
  for (let index = 0; index < rating; index++) calification.push(index);

  return (
    <div className='ratingStar'>
      {calification.map((data: number) => (
        <img src={start} />
      ))}
    </div>
  );
}
