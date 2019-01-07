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
    return <span />;
  }
  return (
    <div className={'flex-row'}>
      <AudioPlayer filePath={props.focus.filePath} />
      {props.focus.picture && (
        <img className="album-art" src={URL.createObjectURL(props.focus.picture)} />
      )}
    </div>
  );
}

export default connect(mapStateToProps)(AudioContainer);
