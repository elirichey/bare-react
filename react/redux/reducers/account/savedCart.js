/*
  Projects are essentially just saved carts, that
  can be viewed and then loaded into the current cart.
  Some of that logic relies on saving the current
  cart for later use, or merging the cart with
  project.
*/

import {
  FETCH_SAVED_CART_INDEX,
  LOAD_SAVED_CART_INDEX,
  FAIL_SAVED_CART_INDEX,
  FETCH_SAVED_CART_DELETE,
  LOAD_SAVED_CART_DELETE,
  FAIL_SAVED_CART_DELETE
} from "../../actions/account/savedCart";

const initialState = {
  isFetching: false,
  data: [],
  error: null,
  errorType: null
};

export default function savedCart(state = initialState, action) {
  switch (action.type) {
    case FETCH_SAVED_CART_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_SAVED_CART_INDEX:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_SAVED_CART_INDEX:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_SAVED_CART_INDEX"
      };
    case FETCH_SAVED_CART_DELETE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_SAVED_CART_DELETE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_SAVED_CART_DELETE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_SAVED_CART_DELETE"
      };
    default:
      return state;
  }
}
