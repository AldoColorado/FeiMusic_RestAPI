const express = require('express');
const database = require("../models")


module.exports = {
    
    async getArtistLike(req, res) {
        return database.ArtistLike.findAll({
            attributes: ['idArtista'],
            include: {
                model: database.Artista,
                attributes: ['idArtista', 'nombreArtista']
            },
            where: {
                idConsumidor : req.params.idConsumidor
            }
        }).then(artistLike => res.send(artistLike));
    },

    async createArtistLike(req, res) {
        return database.ArtistLike.create({
            idArtista: req.body.idArtista,
            idConsumidor: req.body.idConsumidor
        }).then(submitedArtistaLike => res.send(submitedArtistaLike));
    }

}