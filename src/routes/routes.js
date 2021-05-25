const express = require('express');
const routesCuenta = require('./routesCuenta');
const routesArtista = require('./routesArtista');
const routesConsumidor = require('./routesConsumidor');
const routesAlbum = require('./routesAlbum');
const routesAuth = require('./routesAuth');

module.exports = {
    routesCuenta,
    routesConsumidor,
    routesArtista,
    routesAlbum,
    routesAuth
}