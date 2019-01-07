import React from 'react';

export default function AudioPlayer(props) {
  return (
    <div>
      <audio src={props.filePath} controls={true} autoPlay={true} />
    </div>
  );
}
