import {ofType} from 'redux-observable';
import {map, mergeMap, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {GET_TRANSACTIONS} from '../contants/transactionConstants';
import {
  getTransactionsAPISuccess,
  getTransactionsAPIError,
} from '../actions/transactionActions';

const transactionEpic = action$ => {
  return action$.pipe(
    ofType(GET_TRANSACTIONS),
    mergeMap(action => {
      return ajax
        .getJSON('https://recruitment-test.flip.id/frontend-test')
        .pipe(
          map(response => {
            return getTransactionsAPISuccess(response);
          }),
          catchError(
            err =>
              new Observable(subscriber =>
                subscriber.next(getTransactionsAPIError(err)),
              ),
          ),
        );
    }),
  );
};

export default transactionEpic;
