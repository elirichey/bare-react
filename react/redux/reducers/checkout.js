/*
  Checkout reducer holds the current checkout 
  completion state and is passed to the Checkout.js
  component.
*/

import _ from "lodash";
import {
  // start
  START_CHECKOUT,
  // shipping
  UPDATE_CHECKOUT_STEP,
  SELECT_SPLIT_SHIPPING,
  START_SPLIT_SHIPPING,
  STOP_SPLIT_SHIPPING,
  CREATE_SHIPPING_GROUP,
  UPDATE_SHIPPING_GROUP,
  REVERT_SHIPPING_GROUP,
  FETCH_CHECKOUT_SHIPPING,
  LOAD_CHECKOUT_SHIPPING,
  FAIL_CHECKOUT_SHIPPING,
  // billing
  // ADD_ADDRESS,
  SELECT_PAYMENT_METHOD,
  FETCH_CHECKOUT_PAYMENT,
  LOAD_CHECKOUT_PAYMENT,
  FAIL_CHECKOUT_PAYMENT,
  // final
  FETCH_CHECKOUT_COMPLETE,
  LOAD_CHECKOUT_COMPLETE,
  FAIL_CHECKOUT_COMPLETE
} from "../actions/checkout";

const emptyShippingGroup = {
  addressLine1: "",
  addressLine2: "",
  addressCity: "",
  addressState: "",
  addressZip: "",
  shippingMethod: "",
  shippingCost: "",
  lineItems: []
};

const initialState = {
  isFetchingPayment: false,
  isFetchingShipping: false,
  isFetchingCompletion: false,
  paymentError: null,
  paymentErrorMsg: null,
  paymentErrorCode: null,
  paymentErrorType: null,
  shippingError: null,
  shippingErrorMsg: null,
  completionError: null,
  completionErrorMsg: null,
  currentStep: "ADD_ADDRESS",
  lineItems: [], // direct copy from cart
  showBillingAddress: false,
  shippingMultipleDestinations: false,
  nextShippingGroup: [],
  shippingGroups: [],
  customer: {
    first_name: "bob",
    last_name: "jones",
    email: "user@example.com",
    phone: "123-123-1234",
    company: "Widget Co."
  },
  notes: "",
  vendor_notes: "",
  production_notes: "",
  billing: {
    paymentMethod: "",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: ""
    }
  },
  order: null,
  meta: {}
};

export default function checkout(state = initialState, action) {
  var nextState = { ...state };
  var groups = _.clone(nextState.shippingGroups);

  switch (action.type) {
    // TODO -- setup lineitems conversion here.
    case START_CHECKOUT:
      if (action.cart.lineItems.length > 0) {
        var nextState = _.clone(initialState);
        var group = _.clone(emptyShippingGroup);
        group.lineItems = action.cart.lineItems;
        nextState.shippingGroups = [group];
        return nextState;
      }
      break;
    case UPDATE_CHECKOUT_STEP:
      nextState.currentStep = action.data;
      return nextState;

    case SELECT_SPLIT_SHIPPING:
      nextState.shippingMultipleDestinations = action.data;
      return nextState;

    case START_SPLIT_SHIPPING:
      nextState.shippingMultipleDestinations = true;
      nextState.lineItems = groups[0].lineItems;
      nextState.shippingGroups = [];
      nextState.currentStep = "GROUP_SHIPMENTS";
      return nextState;

    case CREATE_SHIPPING_GROUP:
      var newGroup = _.clone(emptyShippingGroup);

      var notMatches = [];
      var matches = nextState.lineItems.filter(item => {
        if (action.data.includes(item.uuid)) {
          return true;
        } else {
          notMatches.push(item);
          return false;
        }
      });

      nextState.lineItems = notMatches;
      newGroup.lineItems = matches;
      nextState.shippingGroups.push(newGroup);
      nextState.currentStep = "ADD_ADDRESS";
      return nextState;

    case REVERT_SHIPPING_GROUP:
      var nextGroups = _.clone(nextState.shippingGroups);
      var nextLineItems = _.clone(nextState.lineItems);

      var groupItems = nextGroups[action.index].lineItems;
      groupItems.forEach(item => nextLineItems.push(item));
      nextGroups.splice(action.index, 1);

      nextState.lineItems = nextLineItems;
      nextState.shippingGroups = nextGroups;
      nextState.currentStep = "GROUP_SHIPMENTS";
      return nextState;

    case UPDATE_SHIPPING_GROUP:
      groups[action.index] = action.data;
      nextState.shippingGroups = groups;
      return nextState;

    case STOP_SPLIT_SHIPPING:
      nextState.shippingMultipleDestinations = false;
      nextState.lineItems = [];
      var group = _.clone(emptyShippingGroup);
      group.lineItems = _.clone(action.cart.lineItems);
      nextState.shippingGroups = [group];
      nextState.currentStep = "ADD_ADDRESS";
      return nextState;

    case SELECT_PAYMENT_METHOD:
      nextState.billing.paymentMethod = action.data;
      return nextState;

    case FETCH_CHECKOUT_SHIPPING:
      nextState.isFetchingShipping = true;
      return nextState;

    case LOAD_CHECKOUT_SHIPPING:
      nextState.isFetchingShipping = false;
      nextState.shippingError = false;
      nextState.shippingErrorMsg = null;
      nextState.shippingErrorMsg = null;
      var group = groups[groups.length - 1];
      group.shippingCost = action.data.total;
      nextState.shippingGroups = groups;
      return nextState;

    case FAIL_CHECKOUT_SHIPPING:
      nextState.isFetchingShipping = false;
      nextState.shippingError = true;
      nextState.shippingErrorMsg = action.data;
      return nextState;

    case FETCH_CHECKOUT_PAYMENT:
      nextState.isFetchingPayment = true;
      return nextState;

    case LOAD_CHECKOUT_PAYMENT:
      nextState.isFetchingPayment = false;
      nextState.paymentError = false;
      nextState.paymentErrorCode = null;
      nextState.paymentErrorType = null;
      nextState.paymentErrorMsg = null;
      nextState.order = action.data;
      return nextState;

    case FAIL_CHECKOUT_PAYMENT:
      nextState.isFetchingPayment = false;
      nextState.paymentError = true;
      nextState.paymentErrorCode = action.data.code;
      nextState.paymentErrorType = action.data.type;
      nextState.paymentErrorMsg = action.data.message;
      return nextState;

    case FETCH_CHECKOUT_COMPLETE:
      nextState.isFetchingCompletion = true;
      return nextState;

    case LOAD_CHECKOUT_COMPLETE:
      nextState.isFetchingCompletion = false;
      nextState.completionError = false;
      nextState.completionErrorMsg = null;
      nextState.currentStep = "COMPLETED";
      return nextState;

    case FAIL_CHECKOUT_COMPLETE:
      nextState.isFetchingCompletion = false;
      nextState.completionError = true;
      nextState.completionErrorMsg = action.data;
      return nextState;

    case "RESET_CHECKOUT":
      return initialState;
    default:
      return state;
  }
}
