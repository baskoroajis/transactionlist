import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers/rootreducers';

const configureStore = midleware => {
  return createStore(rootReducers, applyMiddleware(midleware));
};

export default configureStore;
