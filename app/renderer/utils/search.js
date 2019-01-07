const Fuse = require('fuse.js');

const fusesMemos = {};

export default function search(songs, searchValue, searchTypeValue) {
  let keys;
  if (searchTypeValue === 'searchAll') {
    keys = ['title', 'artist', 'album', 'genre', 'track'];
  } else {
    keys = [searchTypeValue];
  }
  var options = {
    shouldSort: true,
    threshold: 0.1,
    tokenize: false,
    location: 0,
    distance: 200,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: keys,
  };

  const hackyMemo = '' + songs.length + JSON.stringify(options);
  if (!fusesMemos[hackyMemo]) {
    fusesMemos[hackyMemo] = new Fuse(songs, options);
  }
  return fusesMemos[hackyMemo].search(searchValue);
}
