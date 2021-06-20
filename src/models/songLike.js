const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const SongLike = sequelize.define("SongLike", {
        idCancion: {
            type: Sequelize.BIGINT,
        },
        idConsumidor: {
            type: Sequelize.BIGINT
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    // Album.associate = models =>{
    //     Album.hasMany(models.Cancion, {foreignKey: 'idAlbum' });
    // };

    // Album.associate = models =>{
    //     Album.belongsTo(models.Artista, {foreignKey: 'idArtista' });
    // };

    // Album.associate = models =>{
    //     Album.belongsToMany(models.Consumidor, {through: 'AlbumLike', foreignKey: 'idAlbum', otherKey: 'idConsumidor'});
    // }

    return SongLike;
}