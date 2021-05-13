export const START_CHECKOUT = "START_CHECKOUT";
export const UPDATE_CHECKOUT_STEP = "UPDATE_CHECKOUT_STEP"

// shipping
export const SELECT_SPLIT_SHIPPING = "SELECT_SPLIT_SHIPPING"
export const START_SPLIT_SHIPPING = "START_SPLIT_SHIPPING"
export const STOP_SPLIT_SHIPPING = "STOP_SPLIT_SHIPPING"
export const ADD_ADDRESS = "ADD_ADDRESS"
export const CREATE_SHIPPING_GROUP = "CREATE_SHIPPING_GROUP"
export const UPDATE_SHIPPING_GROUP = "UPDATE_SHIPPING_GROUP"
export const REVERT_SHIPPING_GROUP = "REVERT_SHIPPING_GROUP"
export const FETCH_CHECKOUT_SHIPPING = 'FETCH_CHECKOUT_SHIPPING';
export const LOAD_CHECKOUT_SHIPPING = 'LOAD_CHECKOUT_SHIPPING';
export const FAIL_CHECKOUT_SHIPPING = 'FAIL_CHECKOUT_SHIPPING';

// billing
export const SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD"
export const FETCH_CHECKOUT_PAYMENT = 'FETCH_CHECKOUT_PAYMENT';
export const LOAD_CHECKOUT_PAYMENT = 'LOAD_CHECKOUT_PAYMENT';
export const FAIL_CHECKOUT_PAYMENT = 'FAIL_CHECKOUT_PAYMENT';

export const FETCH_CHECKOUT_COMPLETE = 'FETCH_CHECKOUT_COMPLETE';
export const LOAD_CHECKOUT_COMPLETE = 'LOAD_CHECKOUT_COMPLETE';
export const FAIL_CHECKOUT_COMPLETE = 'FAIL_CHECKOUT_COMPLETE';


export function updateCheckoutStep(step) {
  return {
    type: UPDATE_CHECKOUT_STEP,
    data: step
  }
}


export function selectSplitShipping(val) {
  return {
    type: SELECT_SPLIT_SHIPPING,
    data: val
  }
}
export function startSplitShipping() {
  return {
    type: START_SPLIT_SHIPPING,
  }
}

export function stopSplitShipping(cart) {
  return {
    type: STOP_SPLIT_SHIPPING,
    cart: cart
  }
}

export function selectPaymentMethod(val) {
  return {
    type: SELECT_PAYMENT_METHOD,
    data: val
  }
}

export function addAddress(val) {
  return {
    type: ADD_ADDRESS,
    data: val
  }
}

export function createShippingGroup(data) {
  return {
    type: CREATE_SHIPPING_GROUP,
    data: data
  }
}

export function revertShippingGroup(index) {
  return {
    type: REVERT_SHIPPING_GROUP,
    index: index
  }
}

export function updateShippingGroup(index, data) {
  return {
    type: UPDATE_SHIPPING_GROUP,
    data: data,
    index: index
  }
}




export function fetchCheckoutShipping() {
  return {
    type: FETCH_CHECKOUT_SHIPPING,
  }
}

export function loadCheckoutShipping(data) {
  return {
    type: LOAD_CHECKOUT_SHIPPING,
    data: data
  }
}

export function failCheckoutShipping(data) {
  return {
    type: FAIL_CHECKOUT_SHIPPING,
    data: data
  }
}

export function fetchCheckoutComplete() {
  return {
    type: FETCH_CHECKOUT_COMPLETE,
  }
}

export function loadCheckoutComplete(data) {
  return {
    type: LOAD_CHECKOUT_COMPLETE,
    data: data
  }
}

export function failCheckoutComplete(data) {
  return {
    type: FAIL_CHECKOUT_COMPLETE,
    data: data
  }
}

export function fetchCheckoutPayment() {
  return {
    type: FETCH_CHECKOUT_PAYMENT,
  }
}

export function loadCheckoutPayment(data) {
  return {
    type: LOAD_CHECKOUT_PAYMENT,
    data: data
  }
}

export function failCheckoutPayment(data) {
  return {
    type: FAIL_CHECKOUT_PAYMENT,
    data: data
  }
}





/// OLD ACTIONS
export const SAVE_CHECKOUT_STATE = "SAVE_CHECKOUT_STATE";

export const COMPLETE_CHECKOUT_SAGA = "COMPLETE_CHECKOUT_SAGA";
export const FETCH_COMPLETE_CHECKOUT = "FETCH_COMPLETE_CHECKOUT";
export const LOAD_COMPLETE_CHECKOUT = "LOAD_COMPLETE_CHECKOUT";
export const FAIL_COMPLETE_CHECKOUT = "FAIL_COMPLETE_CHECKOUT";

export function startCheckout(cart) {
  return {
    type: START_CHECKOUT,
    cart: cart
  };
}

export function saveCheckoutState(data) {
  return {
    type: SAVE_CHECKOUT_STATE,
    data: data
  };
}

export function completeCheckout(data) {
  return {
    type: COMPLETE_CHECKOUT_SAGA,
    data: data
  };
}
