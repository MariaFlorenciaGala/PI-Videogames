
//import "./searchBar.css";
//COMPONENTES
import Filters from '../filters/filters'

const SearchBar = ({ handleChange, handleSubmit }) => {
    return (
      <>
      <form onChange={handleChange} >
        <input placeholder='Buscar por nombre' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      <Filters />
      </>
    )
    };
  
  export default SearchBar;
  