const express = require('express');
const routerCancion = express.Router();
const controller = require("../controller/cancionDAO");

routerCancion.get('/Cancion', controller.getCanciones);
routerCancion.get('/Cancion/:idCancion', controller.getCancion);
routerCancion.post('/Cancion', controller.createCancion);

module.exports = routerCancion;