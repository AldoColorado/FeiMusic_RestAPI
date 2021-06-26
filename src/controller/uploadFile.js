const Multer = require('multer');
const path = require('path');

const {Storage} = require('@google-cloud/storage');

const googleCloud = new Storage({
    keyFilename: path.join( 'C:/Users/Aldo/Desktop/FeiMusic_RestAPI/config/potent-zodiac-317804-cd3169b565c0.json'),
    projectId: 'potent-zodiac-317804'
});

const feiMusicBucket = googleCloud.bucket('fei_music_files');

const multer = Multer({
    storage: Multer.memoryStorage(),
})


module.exports = {
    async uploadArchivo(req, res) {
            const newFileName = req.file.originalname;
            const blob =  feiMusicBucket.file(newFileName)
            const blobStream = blob.createWriteStream();
        
            blobStream.on("error", err => console.log(err));
            blobStream.on("finish", () => {
                const publicUrl = `https://storage.googleapis.com/${feiMusicBucket.name}/${blob.name}`
                res.send(publicUrl);
            })
            blobStream.end(req.file.buffer); 
        
    }
}