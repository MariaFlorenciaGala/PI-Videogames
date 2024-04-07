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


function App() {


  return (
    <div>
        <Nav />
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/" element={<NewVideogame/>} />
      </Routes>
    </div>
  );
}

export default App;


