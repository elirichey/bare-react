// Old
export const FETCH_ADDRESSES = "FETCH_ADDRESSES";
export const LOAD_ADDRESSES = "LOAD_ADDRESSES";
export const FAIL_ADDRESSES = "FAIL_ADDRESSES";
export const ACCOUNT_ADDRESSES_SAGA = "ACCOUNT_ADDRESSES_SAGA";

export function fetchAccountAddresses(token) {
  return {
    type: ACCOUNT_ADDRESSES_SAGA,
    token: token
  };
}

// Get
export const FETCH_ADDRESSES_INDEX = "FETCH_ADDRESSES_INDEX";
export const LOAD_ADDRESSES_INDEX = "LOAD_ADDRESSES_INDEX";
export const FAIL_ADDRESSES_INDEX = "FAIL_ADDRESSES_INDEX";

export function fetchAddressesIndex() {
  return {
    type: FETCH_ADDRESSES_INDEX
  };
}
export function loadAddressesIndex(data) {
  return {
    type: LOAD_ADDRESSES_INDEX,
    data: data
  };
}
export function failAddressesIndex(data) {
  return {
    type: FAIL_ADDRESSES_INDEX,
    data: data
  };
}

// Create
export const FETCH_ADDRESSES_CREATE = "FETCH_ADDRESSES_CREATE";
export const LOAD_ADDRESSES_CREATE = "LOAD_ADDRESSES_CREATE";
export const FAIL_ADDRESSES_CREATE = "FAIL_ADDRESSES_CREATE";

export function fetchAddressesCreate() {
  return {
    type: FETCH_ADDRESSES_CREATE
  };
}
export function loadAddressesCreate(data) {
  return {
    type: LOAD_ADDRESSES_CREATE,
    data: data
  };
}
export function failAddressesCreate(data) {
  return {
    type: FAIL_ADDRESSES_CREATE,
    data: data
  };
}

// Update
export const FETCH_ADDRESSES_UPDATE = "FETCH_ADDRESSES_UPDATE";
export const LOAD_ADDRESSES_UPDATE = "LOAD_ADDRESSES_UPDATE";
export const FAIL_ADDRESSES_UPDATE = "FAIL_ADDRESSES_UPDATE";

export function fetchAddressesUpdate() {
  return {
    type: FETCH_ADDRESSES_UPDATE
  };
}
export function loadAddressesUpdate(data) {
  return {
    type: LOAD_ADDRESSES_UPDATE,
    data: data
  };
}
export function failAddressesUpdate(data) {
  return {
    type: FAIL_ADDRESSES_UPDATE,
    data: data
  };
}

// Delete
export const FETCH_ADDRESSES_DELETE = "FETCH_ADDRESSES_DELETE";
export const LOAD_ADDRESSES_DELETE = "LOAD_ADDRESSES_DELETE";
export const FAIL_ADDRESSES_DELETE = "FAIL_ADDRESSES_DELETE";

export function fetchAddressesDelete() {
  return {
    type: FETCH_ADDRESSES_DELETE
  };
}
export function loadAddressesDelete(data) {
  return {
    type: LOAD_ADDRESSES_DELETE,
    data: data
  };
}
export function failAddressesDelete(data) {
  return {
    type: FAIL_ADDRESSES_DELETE,
    data: data
  };
}
