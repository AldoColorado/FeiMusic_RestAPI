const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Genero = sequelize.define("Genero", {
        idGenero: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    // Genero.associate = models =>{
    //     Genero.hasMany(models.Artista, {foreignKey: 'idGenero' });
    // };

    // Genero.associate = models =>{
    //     Genero.hasMany(models.Cancion, {foreignKey: 'idGenero' });
    // };

    return Genero;
}
