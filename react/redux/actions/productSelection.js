export const FETCH_PRODUCT_SAGA = "FETCH_PRODUCT_SAGA";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const LOAD_PRODUCT = "LOAD_PRODUCT";
export const FAIL_PRODUCT = "FAIL_PRODUCT";
export const SELECT_COLOR = "SELECT_COLOR";
export const SELECT_DECORATION_TYPE = "SELECT_DECORATION_TYPE";
export const REMOVE_DECORATION_TYPE = "REMOVE_DECORATION_TYPE";
export const SELECT_VARIANT = "SELECT_VARIANT";
export const UPDATE_SIZE_BREAKDOWN = "UPDATE_SIZE_BREAKDOWN";
export const ADD_DESIGN = "ADD_DESIGN";
export const UPDATE_TOTAL_QTY = "UPDATE_TOTAL_QTY";
export const SAVE_DECORATION_LOCATION = "SAVE_DECORATION_LOCATION";
export const REMOVE_DECORATION_LOCATION = "REMOVE_DECORATION_LOCATION";
export const SELECT_FINISHING = "SELECT_FINISHING";
export const DESELECT_FINISHING = "DESELECT_FINISHING";

export const FETCH_PRICING_GRID_UPDATE = "FETCH_PRICING_GRID_UPDATE";
export const LOAD_PRICING_GRID_UPDATE = "LOAD_PRICING_GRID_UPDATE";
export const FAIL_PRICING_GRID_UPDATE = "FAIL_PRICING_GRID_UPDATE";

export const CONVERT_TO_CART_ITEM = "CONVERT_TO_CART_ITEM";
export const EDIT_CART_ITEM = "EDIT_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";

export function fetchPricingGridUpdate() {
  return {
    type: FETCH_PRICING_GRID_UPDATE
  };
}

export function loadPricingGridUpdate(data) {
  return {
    type: LOAD_PRICING_GRID_UPDATE,
    data: data
  };
}

export function failPricingGridUpdate(data) {
  return {
    type: FAIL_PRICING_GRID_UPDATE,
    data: data
  };
}

export function updateTotalQty(qty) {
  return {
    type: UPDATE_TOTAL_QTY,
    qty: qty
  };
}

export function fetchProduct(id) {
  return {
    type: FETCH_PRODUCT_SAGA,
    id: id
  };
}

export function selectColor(color) {
  return {
    type: SELECT_COLOR,
    color: color
  };
}

export function selectVariant(variant) {
  return {
    type: SELECT_VARIANT,
    variant: variant
  };
}

export function selectDecorationType(decorationType) {
  return {
    type: SELECT_DECORATION_TYPE,
    decorationType: decorationType
  };
}
export function removeDecorationType(decorationType) {
  return {
    type: REMOVE_DECORATION_TYPE,
    decorationType: decorationType
  };
}

export function updateSizeBreakdown(name, qty) {
  return {
    type: UPDATE_SIZE_BREAKDOWN,
    size: {
      name: name,
      qty: qty
    }
  };
}

export function convertProductSelectionToCart(nextLineItem) {
  return {
    type: CONVERT_TO_CART_ITEM,
    lineItem: nextLineItem
  };
}

export function editCartItem(index, nextLineItem) {
  return {
    type: EDIT_CART_ITEM,
    nextLineItem: nextLineItem,
    index: index
  };
}

export function updateCartItem(index, nextLineItem) {
  console.log("ACTION", index, nextLineItem);
  return {
    type: UPDATE_CART_ITEM,
    lineItem: nextLineItem,
    index: index
  };
}

export function addDesign(design) {
  return {
    type: ADD_DESIGN,
    design: design
  };
}
export function saveDecorationLocation(data) {
  return {
    type: SAVE_DECORATION_LOCATION,
    data: data
  };
}
export function removeDecorationLocation(data) {
  return {
    type: REMOVE_DECORATION_LOCATION,
    data: data
  };
}
export function selectFinishing(data) {
  return {
    type: SELECT_FINISHING,
    data: data
  };
}
export function deselectFinishing(data) {
  return {
    type: DESELECT_FINISHING,
    data: data
  };
}
