//REACT - REDUX
import { Routes, Route } from 'react-router-dom'

//ESTILOS
import './App.css';

//COMPONENTES
import Nav from './components/nav/nav'
import Home from './views/home/home'
import Detail from './views/details/detail'
import NewVideogame from './views/newVideogame/newVideogame';
import Landing from './views/landing/landing'
import AboutMe from './views/aboutMe/aboutMe';


function App() {


  return (
    <div>
        <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/create" element={<NewVideogame/>} />
        <Route path='/aboutMe' element={<AboutMe />}/>
      </Routes>
    </div>
  );
}

export default App;


