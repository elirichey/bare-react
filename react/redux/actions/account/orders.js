export const FETCH_ORDERS = "FETCH_ORDERS";
export const LOAD_ORDERS = "LOAD_ORDERS";
export const FAIL_ORDERS = "FAIL_ORDERS";
export const ACCOUNT_ORDERS_SAGA = "ACCOUNT_ORDERS_SAGA";
export function fetchAccountOrders(token) {
  return {
    type: ACCOUNT_ORDERS_SAGA,
    token: token
  };
}
