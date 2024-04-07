
//import "./detail.jsx";

//REACT - REDUX
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

//ACTIONS
import  { getVideogamesById } from '../../redux/actions'


const Detail = () => {
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(getVideogamesById())//Suscripcion cuando se monta
    
  }, [dispatch])

    return (
      <div>
        <div>X</div>
        <div>Detail de cada juego</div>
        <h2>Descripción: {}</h2>
        <h2>Fecha de lanzamiento: </h2>
        <h2>Generos: </h2>
        
      </div>
    )
    };
  
  export default Detail;
  
