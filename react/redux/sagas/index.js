import { watchSignin, watchSignup } from "./auth";
import { watchFetchProduct } from "./productSelection";
import { watchAccountOrders } from "./accountOrders";
import { watchCompleteCheckout } from "./checkout";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchSignup(),
    watchSignin(),
    watchFetchProduct(),
    watchAccountOrders(),
    watchCompleteCheckout(),
  ]);
}
