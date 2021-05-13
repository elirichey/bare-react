import {
  COMPLETE_CHECKOUT_SAGA,
  FETCH_COMPLETE_CHECKOUT,
  LOAD_COMPLETE_CHECKOUT,
  FAIL_COMPLETE_CHECKOUT
} from "../actions/checkout";
import { RESET_CART } from "../actions/cart";
import { call, put, takeEvery } from "redux-saga/effects";
// import { delay } from "redux-saga";
import { Checkout } from "@85supply/web-api";

function* fetchCompleteCheckout() {
  yield put({ type: FETCH_COMPLETE_CHECKOUT });
  let data = arguments[0].data;

  var checkout = new Checkout();
  var response = yield call(checkout.completeCheckout, data);

  if (response.status === 200) {
    yield put({ type: LOAD_COMPLETE_CHECKOUT });
    yield put({ type: RESET_CART });
  } else {
    yield put({ type: FAIL_COMPLETE_CHECKOUT });
  }
}
export function* watchCompleteCheckout() {
  yield takeEvery(COMPLETE_CHECKOUT_SAGA, fetchCompleteCheckout);
}
