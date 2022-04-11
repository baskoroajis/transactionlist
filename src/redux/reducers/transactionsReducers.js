import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_API_SUCCESS,
  GET_TRANSACTIONS_API_ERROR,
} from '../contants/transactionConstants';
import {SEARCH_TRANSACTION_RESULT} from '../contants/searchConstans';
import {SORT_TRANSACTION} from '../contants/sortConstants';
import {filterData, sortData} from '../../utils/helper';

const initialState = {
  fullTransactions: undefined,
  transactions: undefined,
  isLoadingGetTransactions: false,
  isApiError: false,
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS: {
      return {...state, isLoadingGetTransactions: true, isApiError: false};
    }
    case GET_TRANSACTIONS_API_SUCCESS: {
      const transactionArr = Object.keys(action?.response).map(
        key => action?.response[key],
      );
      return {
        ...state,
        transactions: transactionArr,
        fullTransactions: transactionArr,
        isLoadingGetTransactions: false,
      };
    }
    case GET_TRANSACTIONS_API_ERROR: {
      return {
        ...state,
        isLoadingGetTransactions: false,
        isApiError: true,
      };
    }
    case SEARCH_TRANSACTION_RESULT: {
      const {params} = action;
      const filteredItems = filterData(
        params.toLowerCase(),
        state.fullTransactions,
      );
      return {
        ...state,
        transactions: filteredItems,
        isLoadingGetTransactions: false,
      };
    }
    case SORT_TRANSACTION: {
      const {params} = action;
      let newTransactions = state.transactions;
      if (params?.field && params?.method) {
        const sorted = sortData(
          params?.field,
          params?.method,
          state.transactions,
        );
        newTransactions = sorted;
      }
      return {
        ...state,
        transactions: newTransactions,
        isLoadingGetTransactions: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default transactionReducer;
