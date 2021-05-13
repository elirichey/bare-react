// OLD SAGA
export const FETCH_FILES = "FETCH_FILES";
export const LOAD_FILES = "LOAD_FILES";
export const FAIL_FILES = "FAIL_FILES";
export const ACCOUNT_FILES_SAGA = "ACCOUNT_FILES_SAGA";

export function fetchAccountFiles(token) {
  return {
    type: ACCOUNT_FILES_SAGA,
    token: token
  };
}
// END OLD


export const FETCH_FILES_INDEX = "FETCH_FILES_INDEX";
export const LOAD_FILES_INDEX = "LOAD_FILES_INDEX";
export const FAIL_FILES_INDEX = "FAIL_FILES_INDEX";
export const FETCH_DESIGNS_DELETE = "FETCH_DESIGNS_DELETE";
export const FAIL_DESIGNS_DELETE = "FAIL_DESIGNS_DELETE";
export const FETCH_DESIGNS_UPDATE = "FETCH_DESIGNS_UPDATE";
export const FAIL_DESIGNS_UPDATE = "FAIL_DESIGNS_UPDATE";
export const FETCH_DESIGNS_CREATE = "FETCH_DESIGNS_CREATE";
export const FAIL_DESIGNS_CREATE = "FAIL_DESIGNS_CREATE";

export function fetchFilesIndex() {
  return {
    type: FETCH_FILES_INDEX
  };
}
export function loadFilesIndex(data) {
  return {
    type: LOAD_FILES_INDEX,
    data: data
  };
}
export function failFilesIndex(data) {
  return {
    type: FAIL_FILES_INDEX,
    data: data
  };
}

export function fetchDesignsDelete() {
  return {
    type: FETCH_DESIGNS_DELETE
  };
}
export function failDesignsDelete(data) {
  return {
    type: FAIL_DESIGNS_DELETE,
    data: data
  };
}

export function fetchDesignsUpdate() {
  return {
    type: FETCH_DESIGNS_UPDATE
  };
}
export function failDesignsUpdate(data) {
  return {
    type: FAIL_DESIGNS_UPDATE,
    data: data
  };
}


export function fetchDesignsCreate() {
  return {
    type: FETCH_DESIGNS_CREATE
  };
}
export function failDesignsCreate(data) {
  return {
    type: FAIL_DESIGNS_CREATE,
    data: data
  };
}


