const express = require('express');
const database = require("../models")

module.exports = {
    async getGeneros(req, res) {
        return database.Genero.findAll().then(generos => res.status(200).send(generos));
    },
}