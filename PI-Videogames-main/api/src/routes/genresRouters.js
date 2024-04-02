const { Router } = require('express')
const genresRouter = Router();

//HANDLERS
const getGenresHandlers = require('../handlers/genresHandlers/genresHandlers')

genresRouter.get('',getGenresHandlers)


module.exports = genresRouter;

