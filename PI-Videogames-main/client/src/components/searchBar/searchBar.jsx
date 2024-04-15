import "./searchBar.styles.css";

const SearchBar = ({ handleChange, handleSubmit }) => {
    return (
      <div className="search" >
      <form onChange={handleChange} >
        <input placeholder='Buscar por nombre' type='text'/>
        <button type='submit' onClick={handleSubmit}>Buscar</button>
      </form>
      </div>
    )
    };
  
  export default SearchBar;
  