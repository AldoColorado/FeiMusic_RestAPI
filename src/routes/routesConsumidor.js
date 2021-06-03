const express = require('express');
const routerConsumidor = express.Router();
const controller = require("../controller/consumidorDAO");

routerConsumidor.get('/Consumidor', controller.getConsumidores);
routerConsumidor.get('/Consumidor/:idConsumidor', controller.getConsumidor);
routerConsumidor.post('/Consumidor', controller.createConsumidor);
routerConsumidor.delete('/Consumidor/:idConsumidor', controller.deleteConsumidor);
routerConsumidor.put('/Consumidor/:idConsumidor', controller.updateConsumidor);


module.exports = routerConsumidor;