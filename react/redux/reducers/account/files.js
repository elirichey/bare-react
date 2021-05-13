/*
  files reducer handles the file management
  from past files.
*/

import {
  FETCH_FILES,
  LOAD_FILES,
  FAIL_FILES,
  FETCH_FILES_INDEX,
  LOAD_FILES_INDEX,
  FAIL_FILES_INDEX,
  FETCH_DESIGNS_DELETE,
  FAIL_DESIGNS_DELETE,
  FETCH_DESIGNS_UPDATE,
  FAIL_DESIGNS_UPDATE,
  FETCH_DESIGNS_CREATE,
  FAIL_DESIGNS_CREATE
} from "../../actions/account/files";

const initialState = {
  isFetching: true,
  data: [],
  error: null,
  errorType: null
};

export default function files(state = initialState, action) {
  switch (action.type) {
    case FETCH_FILES:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null };
    case LOAD_FILES:
      return {
        ...state,
        isFetching: false,
        files: action.data.files
      };
    case FAIL_FILES:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        errorType: "account-files"
      };
    case FETCH_FILES_INDEX:
      return {
        ...state,
        isFetching: true
      };
    case LOAD_FILES_INDEX:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
        errorType: null
      };
    case FAIL_FILES_INDEX:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FILES_INDEX"
      };
    case FETCH_DESIGNS_DELETE:
      return {
        ...state,
        isFetching: true
      };
    case FAIL_DESIGNS_DELETE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "FAIL_DESIGNS_DELETE"
      };
    case FETCH_DESIGNS_UPDATE:
      return {
        ...state,
        isFetching: true
      };
    case FAIL_DESIGNS_UPDATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "DESIGNS_UPDATE"
      };
    case FETCH_DESIGNS_CREATE:
      return {
        ...state,
        isFetching: true
      };
    case FAIL_DESIGNS_CREATE:
      return {
        ...state,
        isFetching: false,
        error: action.data,
        errorType: "DESIGNS_CREATE"
      };
    case "RESET_FILES":
      return initialState;
    default:
      return state;
  }
}
