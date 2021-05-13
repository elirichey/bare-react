import {call, put, takeEvery} from 'redux-saga/effects';
import {Auth} from '@85supply/web-api';

import {
  SIGNIN_SAGA,
  SIGNUP_SAGA,
  FETCH_SIGNIN,
  LOAD_SIGNIN,
  FAIL_SIGNIN,
  FETCH_SIGNUP,
  LOAD_SIGNUP,
  FAIL_SIGNUP,
  // CLEAR_AUTH
} from '../actions/session/auth';

import {LOAD_PROFILE} from '../actions/account/profile';

export function* signin() {
  yield put({type: FETCH_SIGNIN});

  let data = arguments[0].data;

  let auth = new Auth();
  let request = yield call(auth.signin, data);

  if (request.status !== 200) {
    yield put({type: FAIL_SIGNIN, error: request.statusText});
  } else {
    let response = request.data;

    yield put({
      type: LOAD_SIGNIN,
      data: {
        token: response.data.attributes.token,
      },
    });
    yield put({
      type: LOAD_PROFILE,
      data: {
        name: response.data.attributes.name,
        email: response.data.attributes.email,
        company: response.data.attributes.company,
        accountType: response.data.attributes.account_type,
      },
    });
  }
}

export function* signup() {
  yield put({type: FETCH_SIGNUP});

  let data = arguments[0].data;
  let auth = new Auth();
  var request = yield call(auth.signup, data);

  if (request.status !== 200) {
    yield put({type: FAIL_SIGNUP, error: request.statusText});
  } else {
    let response = request.data.data;

    yield put({
      type: LOAD_SIGNUP,
      data: {
        token: response.attributes.token,
        email: response.attributes.email,
      },
    });
  }
}

export function* watchSignin() {
  yield takeEvery(SIGNIN_SAGA, signin);
}
export function* watchSignup() {
  yield takeEvery(SIGNUP_SAGA, signup);
}
