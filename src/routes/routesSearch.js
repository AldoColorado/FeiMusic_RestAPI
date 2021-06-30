const express = require('express');
const routerSearch = express.Router();
const controller = require("../controller/searchDAO");


routerSearch.get('/Search/:nombreRecurso', controller.buscarSearch);
routerSearch.post('/Search', controller.createSearch);

module.exports = routerSearch;