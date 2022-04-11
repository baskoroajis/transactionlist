import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_API_SUCCESS,
  GET_TRANSACTIONS_API_ERROR,
} from '../contants/transactionConstants';

export const getTransactions = () => {
  return {
    type: GET_TRANSACTIONS,
  };
};

export const getTransactionsAPISuccess = response => {
  return {
    type: GET_TRANSACTIONS_API_SUCCESS,
    response: response,
  };
};

export const getTransactionsAPIError = error => {
  return {
    type: GET_TRANSACTIONS_API_ERROR,
    error: error,
  };
};
