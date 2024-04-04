const { Genres } = require('../../db')

const getGenresDB = async(allGenreVideogames) => {  
    // Inserta todos los genres en la BDD si no existen
    for (const genre of allGenreVideogames) {
        await Genres.findOrCreate({ where: {name: genre.name} });
    }
    const genresDB = await Genres.findAll({
      });

    return genresDB;
};
    
module.exports = {
    getGenresDB
}