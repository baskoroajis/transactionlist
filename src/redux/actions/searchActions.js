import {
  SEARCH_TRANSACTION,
  SEARCH_TRANSACTION_RESULT,
} from '../contants/searchConstans';

export const searchTransactions = params => {
  return {
    type: SEARCH_TRANSACTION,
    params: params,
  };
};

export const searchTransactionsResult = params => {
  return {
    type: SEARCH_TRANSACTION_RESULT,
    params: params,
  };
};
