import { handleActions } from 'redux-actions';
import actions from '../actions/inFocus'

export default handleActions(
  {
    [actions.createFocus]: (state, action) => {
      return action.payload;
    },
  },
  {},
);
