
import "./cards.styles.css";

//CONTROLLERS
import Card from '../card/card'

const Cards = () => {
  return (
    <div className='cards'>
      <div>CARDS</div>
      <Card />
      <Card />
      <Card />
    </div>
  )
  };

export default Cards;
