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
    
    // Consumidor.associate = models =>{
    //     Consumidor.belongsTo(models.Cuenta, {foreignKey: 'username' });
    // };

    // Consumidor.associate = models =>{
    //     Consumidor.hasOne(models.Suscripcion, {foreignKey: 'idConsumidor' });
    // };

    // Consumidor.associate = models =>{
    //     Consumidor.belongsToMany(models.Cancion, {through: 'SongLike', foreignKey: 'idConsumidor', otherKey: 'idCancion'});
    // }

    // Consumidor.associate = models =>{
    //     Consumidor.belongsToMany(models.Album, {through: 'AlbumLike', foreignKey: 'idConsumidor', otherKey: 'idAlbum'});
    // }

    // Consumidor.associate = models =>{
    //     Consumidor.belongsToMany(models.Artista, {through: 'ArtistLike', foreignKey: 'idConsumidor', otherKey: 'idArtista'});
    // }

    return Consumidor;
};