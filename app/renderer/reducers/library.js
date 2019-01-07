import { handleActions } from 'redux-actions';
import actions from '../actions/library';

export default handleActions(
  {
    [actions.setLibrary]: (state, action) => {
      return action.payload;
    },
  },
  {},
);
