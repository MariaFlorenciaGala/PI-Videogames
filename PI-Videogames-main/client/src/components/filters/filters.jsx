import "./filters.styles.css";
//ACTIONS
import {getAllGenres, filterByGenre, filterBySource, orderVideogameS } from "../../redux/actions";

//REACT REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres)

  const handleChangeGenre = (e) => {
    dispatch(filterByGenre(e.target.value))
  }

  const handleChangeSource = (e) => {
    dispatch(filterBySource(e.target.value))
  }
  const handleChangeRating = (e) => {
    dispatch(orderVideogameS(e.target.value))
  }

  const handleChangeAlpha = (e) => {
    dispatch(orderVideogameS(e.target.value))
  }

  useEffect(() => {
    dispatch(getAllGenres())
  },[dispatch])

    return (
      <div>
        <label className="labels">Géneros: </label>
        <select name='filterGenre' defaultValue='defect' id='filterGenre' onChange={handleChangeGenre}>
          <option value='defect'>Todos</option>
          {allGenres.map((genre) => {
            return <option key={genre.id} value={genre.name}>{genre.name}</option>
          })}
        </select>        
        <label className="labels">Fuente: </label>
        <select name='filterSource' defaultValue='defect' id='filterSource' onChange={handleChangeSource}>
          <option value='defect'>Todos</option>
          <option value='bdd'>BDD</option>
          <option value='api'>API</option>
        </select>
        <label className="labels" >Rating: </label>
        <select name='filterRating' defaultValue='defect' id='filterRating' onChange={handleChangeRating}>
          <option value='higherRat'>higherRat</option>
          <option value='lowerRat'>lowerRat</option>
        </select>
        <label className="labels">Orden alfabético: </label>
        <select name='filterAlpha' defaultValue='defect' id='filterAlpha' onChange={handleChangeAlpha}>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
        </select>
      </div>
    )
    };
  
  export default Filters;
  