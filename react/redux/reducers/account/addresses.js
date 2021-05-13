/*
  addresses handles all of the account
  addresses a user has saved for later
  use.
*/
import {
  // Old
  FETCH_ADDRESSES,
  LOAD_ADDRESSES,
  FAIL_ADDRESSES,
  // New
  FETCH_ADDRESSES_INDEX,
  LOAD_ADDRESSES_INDEX,
  FAIL_ADDRESSES_INDEX,
  FETCH_ADDRESSES_CREATE,
  LOAD_ADDRESSES_CREATE,
  FAIL_ADDRESSES_CREATE,
  FETCH_ADDRESSES_UPDATE,
  LOAD_ADDRESSES_UPDATE,
  FAIL_ADDRESSES_UPDATE,
  FETCH_ADDRESSES_DELETE,
  LOAD_ADDRESSES_DELETE,
  FAIL_ADDRESSES_DELETE
} from "../../actions/account/addresses";

const initialState = {
  isFetching: true,
  error: null,
  errorType: null,
  data: []
};

export default function addresses(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDRESSES:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null
      };
    case LOAD_ADDRESSES:
      return {
        ...state,
        isFetching: false,
        addresses: action.data.addresses
      };
    case FAIL_ADDRESSES:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        errorType: "account-addresses"
      };
    case FETCH_ADDRESSES_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_ADDRESSES_INDEX:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_ADDRESSES_INDEX:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_ADDRESSES_INDEX"
      };
    case FETCH_ADDRESSES_CREATE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_ADDRESSES_CREATE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_ADDRESSES_CREATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_ADDRESSES_CREATE"
      };
    case FETCH_ADDRESSES_UPDATE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_ADDRESSES_UPDATE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_ADDRESSES_UPDATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_ADDRESSES_UPDATE"
      };
    case FETCH_ADDRESSES_DELETE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_ADDRESSES_DELETE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_ADDRESSES_DELETE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_ADDRESSES_DELETE"
      };
    case "RESET_ADDRESSES":
      return initialState;
    default:
      return state;
  }
}
