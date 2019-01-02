import { handleActions } from 'redux-actions';
import actions from '../actions/songs'

export default handleActions(
  {
    [actions.loadSong]: (state, action) => {
      console.log('state in reducer', state);
      return [...state, action.payload]
    },
  },
  { songs: []},
);
