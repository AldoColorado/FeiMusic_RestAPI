const express = require('express');
const router = express.Router();
const controller = require("../controller/consumidorDAO");

router.get('/Consumidor', controller.getConsumidores);
router.get('/Consumidor/:idConsumidor', controller.getConsumidor);
router.post('/Consumidor', controller.createConsumidor);
router.delete('/Consumidor/:idConsumidor', controller.deleteConsumidor);
router.put('/Consumidor/:idConsumidor', controller.updateConsumidor);


module.exports = router;