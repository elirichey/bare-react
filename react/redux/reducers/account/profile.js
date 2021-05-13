/*
  Profile reducer manages all of the user profile
  information that identifies them.
*/
import {
  FETCH_PROFILE,
  LOAD_PROFILE,
  FAIL_PROFILE,
  // New
  FETCH_PROFILE_UPDATE,
  LOAD_PROFILE_UPDATE,
  FAIL_PROFILE_UPDATE
} from "../../actions/account/profile";

const initialState = {
  name: null,
  email: null,
  company: null,
  accountType: null,
  // New
  isFetching: false,
  data: null,
  error: null,
  errorType: null
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_PROFILE:
      return {
        ...state,
        isFetching: false,
        name: action.data.name,
        email: action.data.email,
        company: action.data.company,
        accountType: action.data.accountType
      };
    case FAIL_PROFILE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        errorType: "load-profile-fail"
      };
    // New
    case FETCH_PROFILE_UPDATE:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_PROFILE_UPDATE:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_PROFILE_UPDATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_PROFILE_UPDATE"
      };
    case "RESET_PROFILE":
      return initialState;
    default:
      return state;
  }
}
