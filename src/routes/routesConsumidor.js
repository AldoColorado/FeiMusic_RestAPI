const express = require('express');
const routerConsumidor = express.Router();
const controller = require("../controller/consumidorDAO");

routerConsumidor.get('/Consumidor', controller.getConsumidores);
routerConsumidor.get('/Consumidor/:username', controller.getConsumidor);
routerConsumidor.post('/Consumidor', controller.createConsumidor);
routerConsumidor.delete('/Consumidor/:username', controller.deleteConsumidor);
routerConsumidor.put('/Consumidor/:username', controller.updateConsumidor);


module.exports = routerConsumidor;