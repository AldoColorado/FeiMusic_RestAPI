const express = require('express');
const database = require("../models")


module.exports = {
    
    async getArtistLike(req, res) {
        return database.ArtistLike.findAll({
            attributes: ['idArtista'],
            include: {
                model: database.Artista,
                attributes: ['idArtista', 'nombreArtista', 'imagenArtista']
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
    },

    async deleteArtistaLike(req,res) {
        return database.ArtistLike.destroy({where: 
            {idArtista: req.body.idArtista,
            idConsumidor: req.body.idConsumidor}
        }).then(artistLike => {
            if(!artistLike){
                res.sendStatus(404);
            }else{
                res.sendStatus(200)
            }     
        })
    }

}