const express = require('express');
const database = require("../models")

module.exports = {
    async getConsumidores(req, res) {
        return database.Consumidor.findAll().then(consumidores => {
            if(!consumidores){
                res.sendStatus(404);
            }else{
                res.send(consumidores);
            }
        })  
    },

    async getConsumidor(req, res) {
        return database.Consumidor.findOne({
            where: {
                idConsumidor : req.params.idConsumidor
            }
        }).then(consumidor => {
            if(!consumidor){
                res.sendStatus(404);
            }else{
                res.send(consumidor);
            }
        })
    },

    async createConsumidor(req, res) {
        return database.Consumidor.create({
            idConsumidor: req.body.idConsumidor,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos
        }).then(submitedConsumidor => res.send(submitedConsumidor));
    },

    async deleteConsumidor(req, res) {
        return database.Consumidor.destroy({
            where: {
                idConsumidor: req.params.idConsumidor
            }
        }).then(() => res.send("Deleted Consumidor"));
    },

    async updateConsumidor(req, res) {
        return database.Consumidor.update({
            idConsumidor: req.body.idConsumidor,
            nombre: req.body.nombre,
            apellidos: req.body.apellidos
        }, {
            where: {
                idConsumidor: req.params.idConsumidor
            }
        }).then(() => res.send("Updated Consumidor"));
    }
}