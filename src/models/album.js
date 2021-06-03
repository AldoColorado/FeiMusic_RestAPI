const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("Album", {
        idAlbum: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            alloNull: false
        },
        nombreAlbum: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        anioLanzamiento: {
            type: Sequelize.DATE
        },
        imagenAlbum: {
            type: Sequelize.BLOB
        },
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

    return Album;
}
