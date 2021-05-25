const express = require('express');
const router = express.Router();
const controller = require('../controller/cuentaDAO');
const middleware = require('./middlewares');

router.get('/Cuenta',controller.getCuentas);
router.get('/Cuenta/:username', controller.getCuenta);
router.post('/Cuenta',controller.createCuenta);
router.delete('/Cuenta/:username', controller.deleteCuenta);
router.put('/Cuenta/:username', controller.updateCuenta);


module.exports = router;