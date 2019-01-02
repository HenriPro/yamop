import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import songs from './reducers/songs'
import search from './reducers/search';
import focus from './reducers/inFocus'
import library from './reducers/library'

import songsActions from './actions/songs';
import searchActions from './actions/search';
import focusActions from './actions/inFocus';
import libraryActions from './actions/library'

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...songsActions,
    ...searchActions,
    ...focusActions,
    ...libraryActions,
    push,
  };

  const reducers = {
    router: connectRouter(routerHistory),
    songs,
    search,
    focus,
    library,
  };

  const middlewares = [thunk, router];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState('library'));
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}

