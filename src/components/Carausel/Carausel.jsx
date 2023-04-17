import Carousel from 'react-bootstrap/Carousel';
import Card from './RAMADAN.png'
import Card2 from './img.png'
import Card3 from './1.png'

function IndividualIntervalsExample() {
  return (
    <Carousel className='w-100'>
      <Carousel.Item interval={100} className=" ">
        <img
          className="d-block w-100 rounded"
          src={Card3}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;