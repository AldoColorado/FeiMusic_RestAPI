const database = require("../models");
const cuentaDAO = require("./cuentaDAO");
const bcrypt = require('bcryptjs');
const token = require('../utils/token');

module.exports = {
    async login(req, res) {
        database.Cuenta.findOne({where: 
            {username: req.body.username}
        }).then(cuenta => {
            if(cuenta == null){
                return res.json({
                    error: true,
                    status: 'Usuario o contrasenia incorrecta'
                })
            }
            if(!cuenta.username || !cuenta.password){
                return res.json({
                    error: true,
                    status: 'Usuario o contrasenia incorrecta'
                });
            }else{
                const contraseniaCorrecta = bcrypt.compareSync(req.body.password, cuenta.password, 10);
                if(contraseniaCorrecta){  
                    return res.json({
                        username: cuenta.username,
                        authToken: token(cuenta),
                        tipoUsuario: cuenta.tipoUsuario,
                        status: 'Success'
                    })     
                }else{
                    return res.json({
                        error: true,
                        status: 'Usuario o contrasenia incorrecta'
                    })
                }
            }
        })
    }  
}