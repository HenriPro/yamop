import React from 'react';
import { Switch, Route } from 'react-router';
import SongList from './containers/SongList';
import SearchContainer from './containers/SearchContainer';
import AudioContainer from './containers/AudioContainer';
import LoadDir from './containers/LoadDir'
export default (
  <div>
    <SearchContainer></SearchContainer>
    <AudioContainer></AudioContainer>
    <Switch>
      <Route exact path="/" component={LoadDir}/>
      <Route exact path="/loaded" component={SongList} />
    </Switch>
  </div>
);
