import { handleActions } from 'redux-actions';
import actions from '../actions/songs'

export default handleActions(
  {
    [actions.loadSong]: (state, action) => {
      return [...state, action.payload]
    },
  },
  { songs: []},
);
