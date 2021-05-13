import {
  FETCH_SIGNIN,
  LOAD_SIGNIN,
  FAIL_SIGNIN,
  FETCH_SIGNUP,
  LOAD_SIGNUP,
  FAIL_SIGNUP,
  // CLEAR_AUTH,
  SIGNOUT
  //CLEAR_ERROR,
} from "../../actions/session/auth";

const initialState = {
  isFetching: false,
  isAuthed: false,
  token: null,
  error: null,
  errorType: null
};

const authedState = {
  isAuthed: true,
  token: "ABC123"
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case FETCH_SIGNIN:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null
      };
    case LOAD_SIGNIN:
      return {
        ...state,
        isAuthed: true,
        isFetching: false,
        token: action.data.token,
        email: action.data.email
      };
    case FAIL_SIGNIN:
      return {
        ...state,
        error: action.error,
        errorType: "signin",
        isFetching: false,
        token: null,
        isAuthed: false
      };
    case FETCH_SIGNUP:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null
      };
    case LOAD_SIGNUP:
      return {
        ...state,
        isFetching: false,
        isAuthed: true,
        token: action.data.token,
        email: action.data.email
      };
    case FAIL_SIGNUP:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        errorType: "signup",
        token: null,
        isAuthed: false
      };
    case SIGNOUT:
      return initialState;
    case "FORCE_AUTH":
      return authedState;
    default:
      return state;
  }
}
