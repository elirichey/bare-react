export const FETCH_PROFILE = "FETCH_PROFILE";
export const LOAD_PROFILE = "LOAD_PROFILE";
export const FAIL_PROFILE = "FAIL_PROFILE";
export const FETCH_PROFILE_SAGA = "FETCH_PROFILE_SAGA";

export function fetchAccountProfile(token) {
  return {
    type: FETCH_PROFILE_SAGA,
    token: token
  };
}

// NEW CODE
export const FETCH_PROFILE_UPDATE = "FETCH_PROFILE_UPDATE";
export const LOAD_PROFILE_UPDATE = "LOAD_PROFILE_UPDATE";
export const FAIL_PROFILE_UPDATE = "FAIL_PROFILE_UPDATE";

export function fetchProfileUpdate() {
  return {
    type: FETCH_PROFILE_UPDATE
  };
}

export function loadProfileUpdate(data) {
  return {
    type: LOAD_PROFILE_UPDATE,
    data: data
  };
}

export function failProfileUpdate(data) {
  return {
    type: FAIL_PROFILE_UPDATE,
    data: data
  };
}
