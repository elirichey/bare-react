/*
  Finance reducer handles past payments,
  payment methods. 
*/

import {
  FETCH_PAYMENTS_INDEX,
  LOAD_PAYMENTS_INDEX,
  FAIL_PAYMENTS_INDEX
} from "../../actions/account/payments";

const initialState = {
  isFetching: false,
  paymentMethods: [],
  data: [],
  error: null,
  errorType: null
};

export default function payments(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAYMENTS_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_PAYMENTS_INDEX:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_PAYMENTS_INDEX:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_PAYMENTS_INDEX"
      };
    default:
      return state;
  }
}
