
const { Op } = require('sequelize'); 
const { Videogame, Genres } = require('../../db');


const getVideogamesDB = async(name) => {
    const opciones = {
        include:[{
            model: Genres, //Esto indica que se incluirán relaciones durante la búsqueda.
            attributes: ['name'],//Especifica qué atributos del modelo Genre se deben incluir en los resultados.
            through: { attributes: [] }//Esto indica que no se necesitan atributos de la tabla de unión (si existe alguna)
            }]
        }
    if(name) {
        opciones.where = {
            name:{
                [Op.iLike]: `%${name}%`// Op.iLike no distingue entre mayúsculas y minúsculas
            }
        }
    }
    const videoGamesDB = await Videogame.findAll(opciones)
    return videoGamesDB
}

module.exports = getVideogamesDB