import { Link } from "react-router-dom";
import "./card.styles.css";

//COMPONENTES


const Card = ({videogame}) => {
  
  return (
    <div className="card">
        <div className="cardImg">
          <img src={videogame.image} alt={videogame.name} />
        </div>
        <div className="cardFooter">
          <h3>{videogame.name}</h3>
          <div className="cardGenres">
          {videogame.genres.map((genre)=>{
              return <li>{genre.name}</li>
          })}
          <div>
        </div>
        </div>
        <div>
           <button className="button"><Link to={`/${videogame.id}`}>Mas info</Link></button>
        </div>
    </div>
   
</div>
  )
  };

export default Card;
