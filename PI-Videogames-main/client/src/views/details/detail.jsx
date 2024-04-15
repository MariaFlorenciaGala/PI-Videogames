
//import "./detail.jsx";

//REACT - REDUX
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
//ACTIONS
import  { getVideogamesById, cleanDetail } from '../../redux/actions'

const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const videogameId = useSelector(state => state.detailVideogame)

  useEffect(() =>{
    dispatch(getVideogamesById(id));
    return () => {
      dispatch(cleanDetail())      
    }    
  }, [dispatch, id])

    return (
      <div>
        <div>X</div>
        <h1>{videogameId.name}</h1>
        <h2>Fecha de lanzamiento: {videogameId.released} </h2>
        <h2>Generos: </h2> {
                  videogameId.genres?.map((genre)=>{
                      return <h3 key={genre.id} >{genre.name}</h3>
                    })
                    }
        <h2>Descripción:</h2>
          <div dangerouslySetInnerHTML= {{ __html: videogameId.description }}></div>   
      </div>
    )
    };
  
  export default Detail;
  
