import {combineReducers} from 'redux';
import transactionReducer from './transactionsReducers';

const rootReducers = combineReducers({
  transactionModel: transactionReducer,
});

export default rootReducers;
