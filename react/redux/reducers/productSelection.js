/*
  ProductSelection handles the building of
  a product line item for adding to the cart.

  The core tenants of this reducer are the 
  'current' key, which holds the raw data from
  our API, and the 'nextLineItem' key which
  is the data store we hold the selection while 
  it is being edited. After the user confirms
  adding the product to the cart, it is moved
  into the lineItems of the cart and cleared
  out.

  After submitting, we prompt the user to add
  more of the same product or continue browsing.

  When editing, we revisit the original product
  route and load the nextLineItem fields and
  sync that to the state.

*/

import _ from "lodash";
import {
  FETCH_PRODUCT,
  LOAD_PRODUCT,
  FAIL_PRODUCT,
  // SELECT_COLOR,
  SELECT_VARIANT,
  SELECT_DECORATION_TYPE,
  REMOVE_DECORATION_TYPE,
  // SELECT_FINISHINGS,
  UPDATE_SIZE_BREAKDOWN,
  UPDATE_TOTAL_QTY,
  SAVE_DECORATION_LOCATION,
  REMOVE_DECORATION_LOCATION,
  SELECT_FINISHING,
  DESELECT_FINISHING,
  ADD_DESIGN,
  FETCH_PRICING_GRID_UPDATE,
  LOAD_PRICING_GRID_UPDATE,
  FAIL_PRICING_GRID_UPDATE,
  EDIT_CART_ITEM,
  UPDATE_CART_ITEM
} from "../actions/productSelection";

const initialNextLineItem = {
  uuid: "",
  sku: "",
  route: "",
  product: null,
  variant: {},
  selectedColor: {},
  selectedDecorationType: null,
  sizeBreakdown: {},
  unitPrice: 0,
  totalQty: 0,
  decorationLocations: [],
  finishings: [],
  designs: [],
  notes: "",
  dueDate: "",
  activePriceGrid: []
};

const initialState = {
  isFetching: true,
  isFetchingPricing: false,
  current: null,
  error: null,
  errorType: null,
  nextLineItem: initialNextLineItem,
  isEditingCart: false,
  editCartIndex: null
};
export default function productSelection(state = initialState, action) {
  var nextLineItem = _.clone(state.nextLineItem);
  var finishings = _.clone(nextLineItem.finishings);
  var locations = _.clone(state.nextLineItem.decorationLocations);

  switch (action.type) {
    case SELECT_VARIANT:
      var allVariants = _.clone(state.current.variants.data);
      let variant = allVariants.find(v => v.attributes.id === action.variant);
      nextLineItem.variant = variant.attributes;
      nextLineItem.uuid = variant.attributes.uuid;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case SELECT_DECORATION_TYPE:
      nextLineItem.selectedDecorationType = action.decorationType;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case REMOVE_DECORATION_TYPE:
      nextLineItem.selectedDecorationType = null;

      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case SELECT_FINISHING:
      finishings.push(action.data);
      nextLineItem.finishings = finishings;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case DESELECT_FINISHING:
      var matches = finishings.filter(item => {
        return item !== action.data;
      });
      nextLineItem.finishings = matches;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case UPDATE_SIZE_BREAKDOWN:
      nextLineItem.sizeBreakdown[action.size.name] = action.size.qty;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case UPDATE_TOTAL_QTY:
      nextLineItem.totalQty = action.qty;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case ADD_DESIGN:
      var designs = _.clone(state.nextLineItem.designs);
      designs.push(action.design);
      nextLineItem.designs = designs;
      return {
        ...state,
        nextLineItem: nextLineItem
      };

    case SAVE_DECORATION_LOCATION:
      // check for existing location
      var matchIndex = null;
      locations.forEach((location, i) => {
        if (location.name === action.data.name) {
          matchIndex = i;
        }
      });

      // overwrite if exists, else push
      if (matchIndex !== null) {
        locations[matchIndex] = action.data;
      } else {
        locations.push(action.data);
      }

      nextLineItem.decorationLocations = locations;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case REMOVE_DECORATION_LOCATION:
      var match = locations.filter(location => {
        return location.name !== action.data.name;
      });

      nextLineItem.decorationLocations = match;
      return {
        ...state,
        nextLineItem: nextLineItem
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        isFetching: true,
        error: null,
        errorType: null,
        current: null
      };
    case FAIL_PRODUCT:
      return {
        ...state,
        error: action.error,
        errorType: "get-product",
        isFetching: false,
        current: null
      };
    case LOAD_PRODUCT:
      if (!state.isEditingCart) {
        var nextLineItem = _.clone(initialNextLineItem);
        nextLineItem.name = action.data.name;
        nextLineItem.product = action.data.id;
        nextLineItem.code = action.data.code;
        nextLineItem.variant = action.data.variants.data[0].attributes;
        nextLineItem.uuid = action.data.variants.data[0].attributes.uuid;
        nextLineItem.sizeBreakdown = {};
      } else {
        var nextLineItem = state.nextLineItem;
      }
      return {
        ...state,
        isFetching: false,
        current: action.data,
        nextLineItem: nextLineItem
      };
    case EDIT_CART_ITEM:
      return {
        ...state,
        isFetching: true,
        nextLineItem: action.nextLineItem,
        isEditingCart: true,
        editCartIndex: action.index
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        isEditingCart: false,
        editCartIndex: null
      };
    case FETCH_PRICING_GRID_UPDATE:
      return {
        ...state,
        isFetchingPricing: true,
        error: null,
        errorType: null
      };
    case FAIL_PRICING_GRID_UPDATE:
      return {
        ...state,
        error: action.error,
        errorType: "pricing-grid-update",
        isFetchingPricing: false
      };
    case LOAD_PRICING_GRID_UPDATE:
      nextLineItem.activePriceGrid = action.data;

      return {
        ...state,
        isFetchingPricing: false,
        nextLineItem: nextLineItem
      };
    case "RESET_PRODUCT_SELECTION":
      return initialState;
    default:
      return state;
  }
}
