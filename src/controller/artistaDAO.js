const express = require('express');
const database = require("../models");


module.exports = {
    async getArtistas(req, res) {
        return database.Artista.findAll().then(artistas => res.send(artistas));
    },

    async getArtista(req, res) {
        database.Artista.findOne({
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

    async getArtistaByNombre(req, res) {
        database.Artista.findOne({
            where: {
                nombreArtista : req.params.nombreArtista
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
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    },

    async updateArtista(req, res) {
        return database.Artista.update({
            nombreArtista: req.body.nombreArtista,
            imagenArtista: req.body.imagenArtista,
        }, {
            where: {
                username: req.params.username
            }
        }).then(() => res.sendStatus(200));
    }
}