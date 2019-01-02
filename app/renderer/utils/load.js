import loadSong from '../actions/songs';
const fs = require('fs');
const jsmediatags = require("jsmediatags");
const path = require('path');



function readFilesInDir(dir, dispatch)  {
    fs.readdir(dir, { encoding: 'utf8', withFileTypes: true }, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.resolve(dir, file);

            fs.stat(filePath, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    readFilesInDir(filePath, dispatch);
                    return;
                }

                jsmediatags.read(filePath, {
                    onSuccess: function (tag) {
                        console.log(tag);
                        const song = {}
                        song.fileName = file;
                        song.path = filePath;
                        song.artist = tag.tags.artist;
                        song.title = tag.tags.title
                        dispatch(loadSong.loadSong(song))
                    },
                    onError: function (error) {
                        console.log(':(', error.type, error.info);
                    }
                });
            });
        });
    });

}

export default readFilesInDir;