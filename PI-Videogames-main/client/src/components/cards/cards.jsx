
import "./cards.styles.css";

//CONTROLLERS
import Card from '../card/card'

const Cards = ({ allVideogames }) => {
  const videogamesList = allVideogames
  return (
    <div className='cards'>
      { videogamesList?.map((videogame) => 
      <Card videogame={videogame}/>
    ) }

    </div>
  )
  };

export default Cards;
