const express = require('express');
const database = require("../models");


module.exports = {
    async getArtistas(req, res) {
        return database.Artista.findAll().then(artistas => res.send(artistas));
    },

    async getArtista(req, res) {
        database.Artista.findOne({
            include: {
                model: database.Album,
                attributes: ['idAlbum', 'nombreAlbum']
            },
            where: {
                username : req.params.username
            }
        }).then(artista => {
            if(artista == null){
                return res.sendStatus(404);
            }else{
                return res.status(200).send(artista)
            }
        });
    },

    async createArtista(req, res) {
        return database.Artista.create({
            idArtista: req.body.idArtista,
            nombreArtista: req.body.nombreArtista,
            imagenArtista: req.body.imagenArtista,
            descripcion: req.body.descripcion,
            idGenero: req.body.idGenero,
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
        }, {
            where: {
                idArtista: req.params.idArtista
            }
        }).then(() => res.send("Updated Artista"));
    }
}