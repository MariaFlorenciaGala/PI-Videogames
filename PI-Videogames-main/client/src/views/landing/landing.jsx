import "./landing.styles.css";
import videoBG from '../../assets/videoBG.mp4'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
      <div className="landing">
        <div  className="landingTitle">
          <h1>PI VIDEOGAMES</h1><hr />
          <p>By Maria Florencia Batalla Córdoba</p>
          <Link to='/home'><button className="landingButton">Home</button></Link>
        </div>
        <video src={videoBG} autoPlay loop muted ></video>
      </div>
    )
    };
  
  export default Landing;
  