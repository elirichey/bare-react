/*
  Orders reducer is primarily used for fetching
  an accounts orders and allowing them to view
  one. It isn't used to create or process an order.
  That is the cart reducer
*/

import {
  FETCH_ORDERS,
  LOAD_ORDERS,
  FAIL_ORDERS
} from "../../actions/account/orders";

const initialState = {
  isFetching: false,
  orders: [],
  data: [],
  error: null,
  errorType: null
};

export default function orders(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDERS:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null
      };
    case LOAD_ORDERS:
      return {
        ...state,
        isFetching: false,
        orders: action.data.orders
      };
    case FAIL_ORDERS:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        errorType: "account-orders"
      };
    case "CLEAR_ORDERS":
      return initialState;
    default:
      return state;
  }
}
