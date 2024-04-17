import "./newVideoGame.styles.css";
//REDUX-REACT
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//ACTIONS
import {
  getAllGenres,
  postVideogame,
} from "../../redux/actions";

//VALIDACIONES
import validation from "../newVideogame/validation";

const NewVideogame = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genresApi = useSelector((state) => state.allGenres);

  const platformsAPI = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "Wii U",
    "Xbox One",
    "Nintendo Switch",
    "iOS",
    "Android",
    "macOS",
    "Linux",
    "Xbox 360",
    "SEGA Master System",
  ];

  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const [valor, setValor] = useState({
    name: "",
    image: "",
    released: "",
    description: "",
    rating: "",
    genresName: [],
    genres: [],
    platforms: [],
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    released: "",
    description: "",
    rating: "",
    genresName: "",
    genres: "",
    platforms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValor({ ...valor, [name]: value });
    setError(
      validation({
        ...valor,
        [name]: value,
      })
    );
  };

  const handleChangePlatforms = (event) => {
    const { value } = event.target;
    if (valor.platforms.length < 6) {
      if (valor.platforms.length > 0) {
        const repetido = valor.platforms.every(
          (platform) => platform !== value
        );
        if (repetido) {
          setValor({
            ...valor,
            platforms: [...valor.platforms, value],
          });
        }
      } else {
        setValor({
          ...valor,
          platforms: [...valor.platforms, value],
        });
      }
    }
  };

  const handleChangeGenres = (event) => {
    const { value } = event.target;
    if (valor.genresName.length < 6) {
      if (valor.genresName.length > 0) {
        const genresAPICoinciden = genresApi.filter(
          (genre) => value === genre.name
        );
        const idGenres = genresAPICoinciden.map((genre) => genre.id);
        const repetido = valor.genresName.every((genre) => genre !== value);
        if (repetido) {
          setValor({
            ...valor,
            genresName: [...valor.genresName, value],
            genres: [...valor.genres, idGenres],
          });
        }
      } else {
        const genresAPICoinciden = genresApi.filter(
          (genre) => value === genre.name
        );
        const idGenres = genresAPICoinciden.map((genre) => genre.id);
        setValor({
          ...valor,
          genresName: [...valor.genresName, value],
          genres: [...valor.genres, idGenres],
        });
      }
    }
  };

  const handleClosePlatform = (name) => {
    const platformFilter = valor.platforms.filter((platform) => {
      return platform !== name;
    });
    setValor({
      ...valor,
      platforms: [...platformFilter],
    });
  };

  const handleCloseGenre = (name) => {
    const genresFilter = valor.genresName.filter((genre) => {
      return genre !== name;
    });
    const genresAPICoinciden = genresApi.filter((genre) =>
      genresFilter.includes(genre.name)
    );
    const idGenres = genresAPICoinciden.map((genre) => genre.id);
    setValor({
      ...valor,
      genresName: [...genresFilter],
      genres: [...idGenres],
    });
  };

  //Función onSubmit
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(postVideogame(valor));
    navigate("/home");
  };

  return (
    <form className="container-form" onSubmit={onSubmit}>
      <div className="container-form-part">
        <h3>Completa los datos del nuevo videojuego:</h3>
        <div className="container-form-inputs">
          <div className="form-input">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              value={valor.name}
              onChange={handleChange}
            />
            <p className="error-message">{error.name}</p>
          </div>
          <div className="form-input">
            <label htmlFor="image">Imagen (URL):</label>
            <input
              type="text"
              name="image"
              value={valor.image}
              onChange={handleChange}
            />
            <p className="error-message">{error.image}</p>
          </div>
          <div className="form-input">
            <label htmlFor="released">Lanzamiento:</label>
            <input
              type="date"
              name="released"
              value={valor.released}
              onChange={handleChange}
            />
            <p className="error-message">{error.released}</p>
          </div>
          <div className="form-input">
            <label htmlFor="description">Descripción:</label>
            <textarea
              name="description"
              cols="45"
              rows="2"
              value={valor.description}
              onChange={handleChange}
            ></textarea>
            <p className="error-message">{error.description}</p>
          </div>
        </div>
      </div>
      <div className="container-form-select">
        <div className="form-select">
          <label htmlFor="platforms">Plataformas:</label>
          <select
            name="platforms"
            id="platforms"
            onChange={handleChangePlatforms}
          >
            <option value="">Selecciona una Plataforma</option>
            {platformsAPI.map((platform) => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>
          <div className="wrap">
            {valor.platforms.map((platform, index) => (
              <div key={index} onClick={() => handleClosePlatform(platform)}>
                <p>{platform}</p>
                <button onClick={() => handleClosePlatform(platform)}>x</button>
              </div>
            ))}
            <p className="error-message">{error.platforms}</p>
          </div>
        </div>
        <div className="form-select">
          <label htmlFor="genres">Géneros:</label>
          <select
            name="genres"
            id="genres"
            onChange={handleChangeGenres}
          >
            <option value="">Selecciona un Género</option>
            {genresApi.map((genre) => (
              <option key={genre.id} value={genre.name}>{genre.name}</option>
            ))}
          </select>
          <div className="wrap">
            {valor.genresName.map((genre, index) => (
              <div key={index} onClick={() => handleCloseGenre(genre)}>
                <p>{genre}</p>
                <button onClick={() => handleCloseGenre(genre)}>x</button>
              </div>
            ))}
            <p className="error-message">{error.genres}</p>
          </div>
        </div>
        <div className="form-range">
          <label htmlFor="rating">Rating:</label>
          <input
            type="range"
            name="rating"
            min="1"
            max="10"
            step="0.01"
            value={valor.rating}
            onChange={handleChange}
          />
          <span>{valor.rating}</span>
          <p className="error-message">{error.rating}</p>
        </div>
        <button
          type="submit"
          className={`${Object.values(error).some((error) => error === "") ? 'disabled' : 'button-form'}`}
          disabled={Object.values(error).some((error) => error !== "")}
        >
          Crear
        </button>
      </div>
    </form>
  );
};

export default NewVideogame;
