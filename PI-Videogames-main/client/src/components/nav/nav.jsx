
//import "./nav.css";
//REDEUX - REACT
import { Link } from 'react-router-dom'
//COMPONENTES
import SearchBar from "../searchBar/searchBar";

const Nav = () => {
    return (
      <div>
        <nav>
          <Link to={'/home'}>Home</Link>
          <Link to={'/aboutMe'}>Sobre mi</Link>
          <SearchBar />
          <Link to={'/create'}>Nuevo videojuego</Link>
        </nav>
      </div>
    )
    };
  
  export default Nav;
  