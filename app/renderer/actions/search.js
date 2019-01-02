import { createAction } from 'redux-actions';

export default {
  handleSearchInput: createAction('HANDLE_SEARCH_INPUT'),
  handleSearchType: createAction('HANDLE_SEARCH_TYPE'),
};
