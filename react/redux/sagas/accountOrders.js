// import { delay } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { Account } from "@85supply/web-api";

import {
  FETCH_ORDERS,
  LOAD_ORDERS,
  FAIL_ORDERS,
  ACCOUNT_ORDERS_SAGA
} from "../actions/account/orders";

export function* fetchAccountOrders() {
  yield put({ type: FETCH_ORDERS });

  let token = arguments[0].token;

  let account = new Account();
  let request = yield call(account.getOrders, token);

  if (request.status !== 200) {
    yield put({ type: FAIL_ORDERS, error: request.statusText });
  } else {
    let response = request.data;

    if (response.data !== null) {
      var data = response.data;
    } else {
      var data = [];
    }

    // load session auth
    yield put({
      type: LOAD_ORDERS,
      data: {
        orders: data
      }
    });
  }
}

export function* watchAccountOrders() {
  yield takeEvery(ACCOUNT_ORDERS_SAGA, fetchAccountOrders);
}
