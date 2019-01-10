import React from 'react';

export default function AudioPlayer(props) {

  return (
    <div className={"flex-row"} >
      {props.focus.picture && (
        <img className="album-art" src={URL.createObjectURL(props.focus.picture)} />
      )}
      <div className={"flex-col audio-detail"}>
        {props.focus.title &&
          <h3>{props.focus.title}</h3>
        }
        
        {props.focus.album &&
          <h4> {props.focus.album} </h4>
        }

        {props.focus.artist &&
          <h4> {props.focus.artist} </h4>
        }
      </div>

      <div className={"flex-col audio-detail"}>
        {props.focus.track &&
          <p> {props.focus.track} </p>
        }
        {props.focus.genre &&
          <p> {props.focus.genre} </p>
        }
      </div>
     
      <audio src={props.filePath} controls={true} autoPlay={true} onEnded={props.onEnded}/>
    </div>
  );
}
