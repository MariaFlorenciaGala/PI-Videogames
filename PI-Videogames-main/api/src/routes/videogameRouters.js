const { Router } = require('express');
const videogamesRouters = Router();

//HANDLERS
const getVideogameHandlers = require('../handlers/videogameHandlers/getAllVideogamesHandlers')
const getVideogamesByIdHandlers = require('../handlers/videogameHandlers/getVideogamesByIdHandlers')
const postNewVideogameHandlers = require('../handlers/videogameHandlers/postNewVideogameHandlers')


videogamesRouters.get('',getVideogameHandlers)
videogamesRouters.get('/name',getVideogameHandlers)
videogamesRouters.get('/:id',getVideogamesByIdHandlers)
videogamesRouters.post('',postNewVideogameHandlers)

module.exports = videogamesRouters