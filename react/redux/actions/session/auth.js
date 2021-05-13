export const FETCH_SIGNUP = 'FETCH_SIGNUP';
export const LOAD_SIGNUP = 'LOAD_SIGNUP';
export const FAIL_SIGNUP = 'FAIL_SIGNUP';
export const CLEAR_AUTH = 'CLEAR_AUTH';

export const FETCH_SIGNIN = 'FETCH_SIGNIN';
export const LOAD_SIGNIN = 'LOAD_SIGNIN';
export const FAIL_SIGNIN = 'FAIL_SIGNIN';

export const SIGNUP_SAGA = 'SIGNUP_SAGA';
export const SIGNIN_SAGA = 'SIGNIN_SAGA';

export const SIGNOUT = 'SIGNOUT';

export function signup(userData) {
  return {
    type: SIGNUP_SAGA,
    data: userData,
  };
}

export function signin(userData) {
  return {
    type: SIGNIN_SAGA,
    data: userData,
  };
}

export function signout(userData) {
  return {
    type: SIGNOUT,
  };
}
