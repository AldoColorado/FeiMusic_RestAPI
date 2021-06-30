const express = require('express');
const db = require('./src/models');
const { routesGenero } = require('./src/routes/routes');
require('./src/controller/associations');
const routes = require('./src/routes/routes');
const { use } = require('./src/routes/routesGenero');
const PORT = process.env.PORT || 4000;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({limit: "50mb", parameterLimit: 500000000 }));

app.use('/feimusic', routes.routesCuenta);
app.use('/feimusic', routes.routesConsumidor);
app.use('/feimusic', routes.routesArtista);
app.use('/feimusic', routes.routesConsumidor);
app.use('/feimusic', routes.routesAuth);
app.use('/feimusic', routes.routesCancion);
app.use('/feimusic', routes.routesSongLike);
app.use('/feimusic', routes.routesAlbumLike);
app.use('/feimusic', routes.routesArtistLike);
app.use('/feimusic', routes.routesFiles);
app.use('/feimusic', routes.routesGenero);
app.use('/feimusic', routes.routesEmailer);
app.use('/feimusic', routes.routesSearch);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('listening on: http://localhost:4000');
    }); 
});
