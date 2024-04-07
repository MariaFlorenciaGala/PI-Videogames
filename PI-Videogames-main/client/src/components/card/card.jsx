import { Link } from "react-router-dom";
import "./card.styles.css";


const Card = ({videogame}) => {

  return (
    <div className="card">
      <h1>Nombre:{videogame.name}</h1>
      <img src={videogame.image }alt='imagen del videojuego'/>
      <h2>Rating:{videogame.rating}</h2>
      <h2>Plataformas: {
        videogame.platforms.map((platform) => platform)}</h2>
      <Link to={`/:id` }><button>Más info</button></Link>
    </div>
  )
  };

export default Card;
