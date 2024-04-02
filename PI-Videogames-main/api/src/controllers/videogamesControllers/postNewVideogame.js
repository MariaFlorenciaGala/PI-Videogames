const { Genres, Videogame } = require('../../db')

const postNewVideoGame = async( {name, description, platforms, image, released, rating, genres} ) => {
    const newGame = await Videogame.create({ name, description, platforms, image, released, rating })
    
    const genresFound = await Genres.findAll({
        where:{ name: genres}
    })
    
    //Relacionar VideoGames con Genre
    await newGame.addGenres(genresFound)

    return newGame
}
module.exports = postNewVideoGame