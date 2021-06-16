const express = require('express');
const database = require("../models")

module.exports = {
    async getArtistas(req, res) {
        return database.Artista.findAll().then(artistas => res.send(artistas));
    },

    async getArtista(req, res) {
        return database.Artista.findAll({
            where: {
                idArtista : req.params.idArtista
            }
        }).then(artista => res.send(artista));
    },

    async createArtista(req, res) {
        return database.Artista.create({
            idArtista: req.body.idArtista,
            nombreArtista: req.body.nombreArtista,
            imagenArtista: req.body.imagenArtista,
            descripcion: req.body.descripcion,
            username: req.body.username    
        }).then(submitedArtista => res.send(submitedArtista));
    },

    async deleteArtista(req, res) {
        return database.Artista.destroy({
            where: {
                idArtista: req.params.idArtista
            }
        }).then(() => res.send("Deleted Artista"));
    },

    async updateArtista(req, res) {
        return database.Artista.update({
            nombreArtista: req.body.nombreArtista,
            imagenArtista: req.body.imagenArtista,
            verificado: req.body.verificado  
        }, {
            where: {
                idArtista: req.params.idArtista
            }
        }).then(() => res.send("Updated Artista"));
    }
}