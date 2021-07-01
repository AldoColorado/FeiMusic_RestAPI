const express = require('express');
const database = require("../models");



module.exports = {
    async getListasCancion(req, res) {
        return database.ListaCancion.findAll().then(listasCancion => res.status(200).send(listasCancion)); 
    },

    async createListaCancion(req, res) {
        return database.ListaCancion.create(req.body).then(listaCancion => res.send(listaCancion));
    },

}