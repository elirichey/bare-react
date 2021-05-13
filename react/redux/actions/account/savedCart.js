// Index
export const FETCH_SAVED_CART_INDEX = "FETCH_SAVED_CART_INDEX";
export const LOAD_SAVED_CART_INDEX = "LOAD_SAVED_CART_INDEX";
export const FAIL_SAVED_CART_INDEX = "FAIL_SAVED_CART_INDEX";

export function fetchSavedCartIndex() {
  return {
    type: FETCH_SAVED_CART_INDEX
  };
}
export function loadSavedCartIndex(data) {
  return {
    type: LOAD_SAVED_CART_INDEX,
    data: data
  };
}
export function failSavedCartIndex(data) {
  return {
    type: FAIL_SAVED_CART_INDEX,
    data: data
  };
}

// Delete
export const FETCH_SAVED_CART_DELETE = "FETCH_SAVED_CART_DELETE";
export const LOAD_SAVED_CART_DELETE = "LOAD_SAVED_CART_DELETE";
export const FAIL_SAVED_CART_DELETE = "FAIL_SAVED_CART_DELETE";

export function fetchSavedCartDelete() {
  return {
    type: FETCH_SAVED_CART_DELETE
  };
}
export function loadSavedCartDelete(data) {
  return {
    type: LOAD_SAVED_CART_DELETE,
    data: data
  };
}
export function failSavedCartDelete(data) {
  return {
    type: FAIL_SAVED_CART_DELETE,
    data: data
  };
}
