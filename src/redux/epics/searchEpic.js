import {ofType} from 'redux-observable';
import {mergeMap, debounceTime} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SEARCH_TRANSACTION} from '../contants/searchConstans';
import {searchTransactionsResult} from '../actions/searchActions';

const searchEpic = action$ => {
  return action$.pipe(
    //do debounce for minimize re-render when typing search
    debounceTime(300),
    ofType(SEARCH_TRANSACTION),
    mergeMap(action => {
      return new Observable(subscriber =>
        subscriber.next(searchTransactionsResult(action?.params)),
      );
    }),
  );
};

export default searchEpic;
