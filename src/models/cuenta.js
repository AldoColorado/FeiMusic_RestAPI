const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Cuenta = sequelize.define("Cuenta", {
        username: {
            type: Sequelize.STRING(50),
            primaryKey: true,
            allowNull : false
        },
        correo: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        password: {
            type: Sequelize.STRING(150),
            allowNull : false
        },
        idConsumidor: {
            type: Sequelize.BIGINT,
            foreignKey: true
        },
        idArtista: {
            type: Sequelize.BIGINT,
            foreignKey: true
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    Cuenta.associate = models =>{
        Cuenta.belongsTo(models.Consumidor, {foreignKey: "idConsumidor"});
    };

    Cuenta.associate = models =>{
        Cuenta.belongsTo(models.Artista, {foreignKey: "idArtista"});
    };

    return Cuenta;
}
