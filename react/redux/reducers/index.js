import { combineReducers } from "redux";

import session from "./session";
import account from "./account";
import global from "./global";
import cart from "./cart";
import checkout from "./checkout";
import productSelection from "./productSelection";

const rootReducer = combineReducers({
  account,
  cart,
  checkout,
  global,
  productSelection,
  session,
});

export default rootReducer;
