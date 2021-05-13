/*
  Cart handles the state of an order before
  checkout. It's one of the more complex
  reducers within the application, mainly
  because it contains complex nested data types.

  Carts can be converted into projects and an
  order is essentially a cart with confirmed
  payment or terms attached.

  The primary data struct is the lineItems list
  which contains the details required for ordering
  a specific product.

  Additional functionality for carts include adding,
  and redeeming coupons, getting shipping quotes,
  and checkout state.

  Cart also interfaces with the server if a user is
  logged in. When they update the cart, we should
  also update the server to save that cart to the
  user.
*/

import _ from "lodash";
import {
  ADD_LINE_ITEM,
  FETCH_UPDATE_CART,
  REMOVE_LINE_ITEM
} from "../actions/cart";
import {
  CONVERT_TO_CART_ITEM,
  UPDATE_CART_ITEM
} from "../actions/productSelection";

const initialState = {
  isFetching: false,
  meta: {},
  lineItems: []
};

export default function cart(state = initialState, action) {
  var newLineItem = action.lineItem;
  var nextLineItems = state.lineItems;
  var cloneNextLineItems = _.clone(state.lineItems);

  switch (action.type) {
    case FETCH_UPDATE_CART:
      nextLineItems.push(newLineItem);
      return {
        ...state,
        isFetching: true
      };
    case ADD_LINE_ITEM:
      nextLineItems.push(newLineItem);
      return {
        ...state,
        isFetching: false,
        lineItems: nextLineItems
      };
    case UPDATE_CART_ITEM:
      cloneNextLineItems[action.index] = action.lineItem;
      return {
        ...state,
        lineItems: nextLineItems
      };
    case REMOVE_LINE_ITEM:
      var index = action.index;
      nextLineItems.splice(index, 1);
      return {
        ...state,
        isFetching: false,
        lineItems: nextLineItems
      };
    case CONVERT_TO_CART_ITEM:
      cloneNextLineItems.push(newLineItem);
      return {
        ...state,
        isFetching: false,
        lineItems: nextLineItems
      };
    case "RESET_CART":
      return initialState;
    default:
      return state;
  }
}
