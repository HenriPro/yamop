import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SongList from './SongList';
import libraryActions from '../actions/library';
import songActions from '../actions/songs';
import readFilesInDir  from '../utils/load';

const { dialog } = require('electron').remote;


const mapStateToProps = (state) => {
    return {
        library: state.library,
    };
};

const mapDispatchToProps = (dispatch) => {
    const search = bindActionCreators(libraryActions, dispatch);
    const song = bindActionCreators(songActions, dispatch);
    return {
      setLibrary: (data) => {
        search.setLibrary(data);
      },
      loadSong: (data) => {
        song.loadSong(data);
      }

    };
};
  

function LoadDirs(props) {
    if (!props.library.length) {
        dialog.showOpenDialog({
            title:"Please pick a folder where you have music",
            properties: ["openDirectory"]},
            (filePath)=> {
                props.setLibrary(filePath);
        });
    } else {
        setTimeout(() => readFilesInDir(props.library[0], props.loadSong),100)
       
    }

    return (
        <SongList></SongList>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(LoadDirs)