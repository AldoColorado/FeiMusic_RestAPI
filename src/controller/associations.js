const database = require("../models")

// Cuenta-Artista
database.Cuenta.hasOne(database.Artista, {foreignKey: "username"});
database.Artista.belongsTo(database.Cuenta, {foreignKey: 'username' });
// Cuenta-Consumidor
database.Cuenta.hasOne(database.Consumidor, {foreignKey: "username"});
database.Consumidor.belongsTo(database.Cuenta, {foreignKey: "username"});
// Album-Cancion
database.Album.hasMany(database.Cancion, {foreignKey: 'idAlbum' });
database.Cancion.belongsTo(database.Album, {foreignKey: 'idAlbum' });
// Album-Artista
database.Album.belongsTo(database.Artista, {foreignKey: 'idArtista' });
database.Artista.hasMany(database.Album, {foreignKey: 'idArtista' });
// Album-Consumidor
database.Album.belongsToMany(database.Consumidor, {through: 'AlbumLike', foreignKey: 'idAlbum', otherKey: 'idConsumidor'});
database.Consumidor.belongsToMany(database.Album, {through: 'AlbumLike', foreignKey: 'idConsumidor', otherKey: 'idAlbum'});
// Genero-Artista
database.Genero.hasMany(database.Artista, {foreignKey: 'idGenero' });
database.Artista.belongsTo(database.Genero, {foreignKey: 'idGenero' });
// Artista-Consumidor
database.Artista.belongsToMany(database.Consumidor, {through: 'ArtistLike', foreignKey: 'idArtista', otherKey: 'idConsumidor'});
database.Consumidor.belongsToMany(database.Artista, {through: 'ArtistLike', foreignKey: 'idConsumidor', otherKey: 'idArtista'});
// Cancion-Genero
database.Cancion.belongsTo(database.Genero, {foreignKey: 'idGenero' });
database.Genero.hasMany(database.Cancion, {foreignKey: 'idGenero' });
// Cancion-ListaReproduccion
database.Cancion.belongsToMany(database.ListaReproduccion, {through: 'ListaCancion', foreignKey: 'idCancion', otherKey: 'idListaReproduccion'} );
database.ListaReproduccion.belongsToMany(database.Cancion, {through: 'ListaCancion', foreignKey: 'idListaReproduccion', otherKey: 'idCancion'});
// Cancion-Consumidor
database.Cancion.belongsToMany(database.Consumidor, {through: 'SongLike', foreignKey: 'idCancion', otherKey: 'idConsumidor'});
database.Consumidor.belongsToMany(database.Cancion, {through: 'SongLike', foreignKey: 'idConsumidor', otherKey: 'idCancion'});
// Consumidor-Suscripcion
database.Consumidor.hasOne(database.Suscripcion, {foreignKey: 'idConsumidor' });
database.Suscripcion.belongsTo(database.Consumidor, {foreignKey: 'idConsumidor' });
// Consumidor-ListaReproduccion
database.Consumidor.hasMany(database.ListaReproduccion, {foreignKey: "idConsumidor"});
database.ListaReproduccion.belongsTo(database.Consumidor, {foreignKey: "idConsumidor"});

database.SongLike.hasOne(database.Cancion, {foreignKey: "idCancion"});
