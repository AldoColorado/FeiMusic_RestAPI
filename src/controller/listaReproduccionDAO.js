const express = require('express');
const database = require("../models");

module.exports = {
    async getListas(req, res) {
        return database.ListaReproduccion.findAll().then(listas => res.status(200).send(listas)); 
    },

    async getListasConsumidor(req, res){
        return database.ListaReproduccion.findAll({
            include: {
                model: database.ListaCancion,
                attributes: ['idCancion', 'idListaReproduccion'],
                include: {
                    model: database.Cancion,
                    attributes: ['idCancion', 'nombreCancion', 'imagenCancion']
                }
            },
            where: {
                idConsumidor : req.params.idConsumidor
            }
        }).then(listas => 
            {
                if(!listas){
                    res.sendStatus(404);
                }else{
                    res.status(200).send(listas)
                }
            });
    },

    async createListaReproduccion(req, res) {
        return database.ListaReproduccion.create(req.body).then(submitedLista => res.send(submitedLista));
    },

    async deleteListaReproduccion(req, res) {
        return database.ListaReproduccion.destroy({
            where: {
                nombre: req.params.nombre
            }
        }).then(() => res.sendStatus(200));
    },

}