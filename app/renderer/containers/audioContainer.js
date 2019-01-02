import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from '../components/AudioPlayer';

const mapStateToProps = (state) => {
    return {
        focus: state.focus,
    };
};

function AudioContainer(props) {
    if (!props.focus) {
        return (<span></span>);
    }
    return (
        <AudioPlayer filePath={props.focus.filePath} />
    );

}

export default connect(mapStateToProps)(AudioContainer)