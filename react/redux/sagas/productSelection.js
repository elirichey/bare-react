import {
  FETCH_PRODUCT_SAGA,
  FETCH_PRODUCT,
  LOAD_PRODUCT,
  FAIL_PRODUCT,
} from '../actions/productSelection';
import {call, put, takeEvery} from 'redux-saga/effects';

import {Products} from '@85supply/web-api';

function* fetchProduct() {
  yield put({type: FETCH_PRODUCT});

  let productId = arguments[0].id;

  let productService = new Products();
  let request = yield call(productService.getProduct, productId);

  if (request.status !== 200) {
    yield put({type: FAIL_PRODUCT, error: request.statusText});
  } else {
    let response = request.data;
    yield put({
      type: LOAD_PRODUCT,
      data: response.data.attributes,
    });
  }
}

export function* watchFetchProduct() {
  yield takeEvery(FETCH_PRODUCT_SAGA, fetchProduct);
}
