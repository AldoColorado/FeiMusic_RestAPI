const express = require('express');
const routerGenero = express.Router();
const controller = require("../controller/generoDAO");

routerGenero.get('/Genero', controller.getGeneros);

module.exports = routerGenero;