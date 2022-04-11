import {SORT_TRANSACTION} from '../contants/sortConstants';

export const sortTransactions = params => {
  return {
    type: SORT_TRANSACTION,
    params: params,
  };
};
