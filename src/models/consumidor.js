const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) =>{
    const Consumidor = sequelize.define("Consumidor", {
        idConsumidor: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        apellidos: {
            type: Sequelize.STRING(50),
        }
    },{
        freezeTableName: true,      //Model tablename will be the same as the model
        timestamps: false
    });
    
    return Consumidor;
};