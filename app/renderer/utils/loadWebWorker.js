const path = require('path');

const appWorker = new Worker(path.join(__dirname, 'load.js'));

function loadWebWorker(dir, loadSong) {
  appWorker.postMessage(dir);
  appWorker.onmessage = function(e) {
    loadSong(e.data);
  };
}

export default loadWebWorker;
