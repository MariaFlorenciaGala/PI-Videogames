//import "./home.css";

//REACT - REDUX
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

//ACTIONS
import  { getAllVideogames, getByName } from '../../redux/actions'

//COMPONENTES
import Cards from '../../components/cards/cards'
import Pagination from '../../components/pagination/pagination'
import Filters from '../../components/filters/filters'
import SearchBar from '../../components/searchBar/searchBar';

const Home = () => {

  const dispatch = useDispatch()
  const allVideogames = useSelector(state => state.allVideogames)
  const totalPagVideogames = allVideogames.length

  const [input, setInput] = useState('');

  //PAGINACIÓN  
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9;
  const lastIndex = currentPage * itemsPerPage;//Ultimo índice
  const firstIndex = lastIndex - itemsPerPage;//Primer índice
  const currentItem = allVideogames.slice(firstIndex, lastIndex)//Página actual
  const paginate =(pagNumber) => setCurrentPage(pagNumber)



  function handleChange(e) {
    const value = e.target.value;
    setInput(value);//creo una función que me va a setear la palabra de búsqueda a lo que hay en el evento.target.value
  }

function handleSubmit(e){
    e.preventDefault()
    dispatch(getByName(input)) 
    setInput('')
    setCurrentPage(1)    
  }
  
  useEffect(() =>{
    dispatch(getAllVideogames())//Suscripcion cuando se monta 
    setCurrentPage(1)   
  }, [dispatch])


   return (
      <div>
        <SearchBar setCurrentPage={setCurrentPage} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <Filters setCurrentPage={setCurrentPage}/>
        <Cards allVideogames={currentItem}/>
        <Pagination totalItems={allVideogames.length} 
                    itemsPerPage={itemsPerPage}
                    onPageChange={paginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage} />
        </div>
    )
    };
  
  export default Home;
  