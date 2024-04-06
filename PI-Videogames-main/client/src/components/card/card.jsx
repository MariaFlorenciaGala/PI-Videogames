import { Link } from "react-router-dom";
import "./card.styles.css";


const Card = () => {
  return (
    <div className="card">
      <h1>Nombre:</h1>
      <img alt='imagen del videojuego'/>
      <h2>Rating:</h2>
      <h2>Plataformas:</h2>
      <Link to="/:id"><button>Más info</button></Link>
    </div>
  )
  };

export default Card;
