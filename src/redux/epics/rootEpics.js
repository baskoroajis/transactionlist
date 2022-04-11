import {combineEpics} from 'redux-observable';
import transactionEpic from './transactionEpic';
import searchEpic from './searchEpic';
const rootEpic = combineEpics(transactionEpic, searchEpic);
export default rootEpic;
