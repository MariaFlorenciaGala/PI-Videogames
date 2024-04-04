const { Genres, Videogame } = require('../../db')


const postNewVideogame = async( name, description, platforms, image, released, rating, genres ) => {
    const newVideogame = await Videogame.create({
        name,
        image,
        description,
        platforms,
        released,
        rating
});
const foundGenres = await Genres.findAll({
    where: {
        name: genres.map(genre => genre.name) 
    }
});

// Agregar los géneros encontrados al videojuego
await newVideogame.addGenres(foundGenres);
const genresName = genres.map(genre => genre.name);

return {
    ...newVideogame.toJSON(),
    genres: genresName
}
}
module.exports = postNewVideogame