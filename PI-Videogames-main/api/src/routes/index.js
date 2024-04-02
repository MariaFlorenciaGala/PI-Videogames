const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const genresRouters = require('./genresRouter');
const videoGamesRouters = require('./videoGamesRouters')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/genres',genresRouters )
router.use('/videogames',videoGamesRouters)

module.exports = router;
