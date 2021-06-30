const Sequelize  = require('Sequelize');

module.exports = (sequelize, DataTypes) => {
    const Cancion = sequelize.define("Cancion", {
        idCancion: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombreCancion: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        letra: {
            type: Sequelize.STRING(250)
        },
        imagenCancion: {
            type: Sequelize.STRING(250)
        },
        track: {
            type: Sequelize.STRING(250)
        }
    },{
        freezeTableName: true,     //Model tablename will be the same as the model
        timestamps: false
    });

    // Cancion.associate = models =>{
    //     Cancion.belongsTo(models.Album, {foreignKey: 'idAlbum' });
    // };

    // Cancion.associate = models =>{
    //     Cancion.belongsTo(models.Genero, {foreignKey: 'idGenero' });
    // };

    // Cancion.associate = models =>{
    //     Cancion.belongsToMany(models.ListaReproduccion, {through: 'ListaCancion', foreignKey: 'idCancion', otherKey: 'idListaReproduccion'} );
    // };

    // Cancion.associate = models =>{
    //     Cancion.belongsToMany(models.Consumidor, {through: 'SongLike', foreignKey: 'idCancion', otherKey: 'idConsumidor'});
    // }


    return Cancion;
}
