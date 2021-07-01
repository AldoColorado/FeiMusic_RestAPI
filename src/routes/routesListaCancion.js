const express = require('express');
const routerListaCancion = express.Router();
const controller = require("../controller/listaCancionDAO");

routerListaCancion.get('/ListaCancion', controller.getListasCancion);
routerListaCancion.post('/ListaCancion', controller.createListaCancion);

module.exports = routerListaCancion;