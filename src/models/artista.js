const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Artista = sequelize.define("Artista", {
        idArtista: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombreArtista: {
            type: Sequelize.STRING(50),
            allowNull : false
        },
        imagenArtista: {
            type: Sequelize.STRING(250),
        },
        descripcion: {
            type: Sequelize.STRING
        },
        idGenero: {
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    // Artista.associate = models =>{
    //     Artista.belongsTo(models.Cuenta, {foreignKey: 'username' });
    // };

    // Artista.associate = models =>{
    //     Artista.hasMany(models.Album, {foreignKey: 'idArtista' });
    // };   

    // Artista.associate = models =>{
    //     Artista.belongsTo(models.Genero, {foreignKey: 'idGenero' });
    // };

    // Artista.associate = models =>{
    //     Artista.belongsToMany(models.Consumidor, {through: 'ArtistLike', foreignKey: 'idArtista', otherKey: 'idConsumidor'});
    // }

    return Artista;
}
