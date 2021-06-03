const express = require('express');
const routesCuenta = require('../routes/routesCuenta');
const routesArtista = require('./routesArtista');
const routesConsumidor = require('./routesConsumidor');
const routesAlbum = require('./routesAlbum');
const routesAuth = require('./routesAuth');

module.exports = {
    routesCuenta : routesCuenta,
    routesArtista : routesArtista,
    routesConsumidor : routesConsumidor,
    routesAlbum : routesAlbum,
    routesAuth : routesAuth
}