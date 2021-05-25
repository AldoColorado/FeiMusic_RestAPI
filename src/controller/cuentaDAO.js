const express = require('express');
const database = require("../models")
const bcrypt = require('bcryptjs');
const { check, validationResult} = require('express-validator');


module.exports = {
    async getCuentas(req, res) {
        return database.Cuenta.findAll().then(cuentas => res.send(cuentas));
    },

    async getCuenta(req, res){
        return database.Cuenta.findOne({
            where: {
                username : req.params.username
            }
        }).then(cuenta => res.send(cuenta));
    },

    async createCuenta(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);    

        return database.Cuenta.create(req.body).then(
                submitedCuenta => {
                    if(!submitedCuenta){
                        res.sendStatus(400);
                    }else{
                        res.sendStatus(200);
                    }
        });
    },

    async deleteCuenta(req, res) {
        return database.Cuenta.destroy({
            where: {
                username: req.params.username
            }
        }).then(() => res.send("Deleted Cuenta"));
    },

    async updateCuenta(req, res) {
        return database.Cuenta.update({
            username: req.body.username,
            correo: req.body.correo,
            password: req.body.password,
        }, {
            where: {
                username: req.params.username
            }
        }).then(() => res.send("Updated Cuenta"));
    }
}