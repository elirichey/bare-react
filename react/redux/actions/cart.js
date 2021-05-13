export const FETCH_UPDATE_CART = "FETCH_UPDATE_CART";
export const ADD_LINE_ITEM = "ADD_LINE_ITEM";
export const REMOVE_LINE_ITEM = "REMOVE_LINE_ITEM";
export const RESET_CART = "RESET_CART";

export function removeLineItem(lineItemIndex) {
  return {
    type: REMOVE_LINE_ITEM,
    index: lineItemIndex
  };
}

export function addLineItem(lineItem) {
  return {
    type: ADD_LINE_ITEM,
    lineItem: lineItem
  };
}
