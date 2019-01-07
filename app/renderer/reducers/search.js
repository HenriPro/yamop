import { handleActions } from 'redux-actions';
import actions from '../actions/search';

export default handleActions(
  {
    [actions.handleSearchInput]: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    [actions.handleSearchType]: (state, action) => {
      return { ...state, searchTypeValue: action.payload };
    },
  },
  {
    searchValue: '',
    searchTypeValue: 'searchAll',
  },
);
