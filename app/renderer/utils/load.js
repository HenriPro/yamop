const fs = require('fs');
const jsmediatags = require("jsmediatags");
const path = require('path');


function readFilesInDir(dir, loadSong)  {
    fs.readdir(dir, { encoding: 'utf8', withFileTypes: true }, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.resolve(dir, file);

            fs.stat(filePath, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    readFilesInDir(filePath, loadSong);
                }
                else if (stat && stat.isFile() && file.match(/\.(mp3|mp4|ogg|flac|acc|wav|)$/i)) {
                    jsmediatags.read(filePath, {
                        onSuccess: function (tag) {
                            // console.log(tag);
                            const song = 
                            {
                                filePath,
                                fileName : file,
                                artist: tag.tags.artist,
                                title: tag.tags.title,
                                album: tag.tags.album,
                                track: tag.tags.track,
                                genre: tag.tags.genre
                            }
                            loadSong(song)
                        },
                        onError: function (error) {
                            console.log(':(', error.type, error.info, filePath);
                        }
                    });
                }
            });
        });
    });

}

export default readFilesInDir;