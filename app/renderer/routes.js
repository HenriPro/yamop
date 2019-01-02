import React from 'react';
import { Switch, Route } from 'react-router';

// import LoginPage from './containers/LoginPage';
// import LoggedInPage from './containers/LoggedInPage';
import SongList from './containers/SongList';
import SearchContainer from './containers/SearchContainer';

export default (
  <div>
  <SearchContainer></SearchContainer>
  <Switch>
    <Route exact path="/" component={SongList} />
  </Switch>
  </div>
);
