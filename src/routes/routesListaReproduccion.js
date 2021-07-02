const express = require('express');
const routerListaReproduccion = express.Router();
const controller = require("../controller/listaReproduccionDAO");


routerListaReproduccion.get('/ListaReproduccion', controller.getListas)
routerListaReproduccion.get('/ListaReproduccion/:idConsumidor', controller.getListasConsumidor);
routerListaReproduccion.post('/ListaReproduccion', controller.createListaReproduccion);
routerListaReproduccion.delete('/ListaReproduccion/:nombre', controller.deleteListaReproduccion);

module.exports = routerListaReproduccion;
