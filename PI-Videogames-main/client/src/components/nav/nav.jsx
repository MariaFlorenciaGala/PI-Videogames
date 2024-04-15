
import "./nav.styles.css";

//REDUX - REACT
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
      <div>
        <nav className="allNav">
            <Link to={'/home'}>Home</Link>
            <Link to={'/aboutMe'}>Sobre mi</Link>
            <Link to={'/create'}>Nuevo videojuego</Link>
        </nav>
      </div>
    )
    };
  
  export default Nav;
  