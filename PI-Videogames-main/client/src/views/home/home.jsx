//import "./home.css";

//REACT - REDUX
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

//ACTIONS
import  { getAllVideogames, getByName } from '../../redux/actions'

//COMPONENTES
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import Filters from '../../components/filters/filters'

const Home = () => {

  const dispatch = useDispatch()
  const allVideogames = useSelector(state => state.allVideogames)

  //Estados
  const [searchString, setSearchString] = useState("")

  function handleChange(e) {
    e.preventDefault()
    setSearchString(e.target.value)//creo una función que me va a setear la palabra de búsqueda a lo que hay en el evento.target.value
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(searchString)) 
  }

  useEffect(() =>{
    dispatch(getAllVideogames())//Suscripcion cuando se monta
    
  }, [dispatch])



    return (
      <div>
        <Filters handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Cards allVideogames={allVideogames}/>
        <Pagination />
        </div>
    )
    };
  
  export default Home;
  