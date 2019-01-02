import { createMemoryHistory } from 'history';
import configureStore from './store';

const syncHistoryWithStore = (store, history) => {
  const { router } = store.getState();
  if (router && router.location) {
    history.replace(router.location);
  }
};

const initialState = {
  songs: [],
  search: {
    searchValue: "",
    searchTypeValue: "searchAll",
  }
};
export const routerHistory = createMemoryHistory();
export const store = configureStore(initialState, routerHistory);
syncHistoryWithStore(store, routerHistory);


