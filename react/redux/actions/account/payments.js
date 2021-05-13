// Index
export const FETCH_PAYMENTS_INDEX = "FETCH_PAYMENTS_INDEX";
export const LOAD_PAYMENTS_INDEX = "LOAD_PAYMENTS_INDEX";
export const FAIL_PAYMENTS_INDEX = "FAIL_PAYMENTS_INDEX";

export function fetchPaymentsIndex() {
  return {
    type: FETCH_PAYMENTS_INDEX
  };
}
export function loadPaymentsIndex(data) {
  return {
    type: LOAD_PAYMENTS_INDEX,
    data: data
  };
}
export function failPaymentsIndex(data) {
  return {
    type: FAIL_PAYMENTS_INDEX,
    data: data
  };
}
