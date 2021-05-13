/*
  Favorites reducer handles all the state
  related to creating, deleting, and updating
  a users' favorites.
*/

import {
  FETCH_FAVORITES_INDEX,
  LOAD_FAVORITES_INDEX,
  FAIL_FAVORITES_INDEX
} from "../../actions/account/favorites";

const initialState = {
  isFetching: true,
  data: [],
  error: null,
  errorType: null
};

export default function favorites(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITES_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_FAVORITES_INDEX:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_FAVORITES_INDEX:
      return {
        ...state,
        isFetching: false,
        data: [],
        error: action.data,
        errorType: "FAIL_FAVORITES_INDEX"
      };

    case "RESET_FAVORITES_INDEX":
      return initialState;
    default:
      return state;
  }
}
