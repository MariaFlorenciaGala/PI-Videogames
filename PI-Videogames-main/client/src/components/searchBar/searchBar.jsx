
//import "./searchBar.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
    return (
      <>
      <form onChange={handleChange} >
        <input placeholder='Buscar por nombre' type='search'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      </>
    )
    };
  
  export default SearchBar;
  