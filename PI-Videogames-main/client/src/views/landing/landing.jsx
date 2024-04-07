//import "./landing.css";
import { Link } from 'react-router-dom'

//COMPONENTES
import Home from "../home/home";

const Landing = () => {
    return (
      <div>
        <div>Landing</div>
        <Link to='/home'><button>Home</button>
</Link>
      </div>
    )
    };
  
  export default Landing;
  