import React from 'react';
import { Switch, Route } from 'react-router';

// import LoginPage from './containers/LoginPage';
// import LoggedInPage from './containers/LoggedInPage';
import SongList from './containers/SongList'

export default (
  <Switch>
    <Route exact path="/" component={SongList} />
  </Switch>
);
