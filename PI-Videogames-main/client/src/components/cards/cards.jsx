
import "./cards.styles.css";

//CONTROLLERS
import Card from '../card/card'

const Cards = ({ allVideogames }) => {
  const videogamesList = allVideogames
  return (
    <div className='container-cards'>
      { videogamesList?.map((videogame) => 
      <Card key={videogame.id} videogame={videogame}/>
    ) }

    </div>
  )
  };

export default Cards;
