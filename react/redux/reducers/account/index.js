/*
  Combines reducers into single account
  reducer
*/
import { combineReducers } from "redux";
import files from "./files";
import favorites from "./favorites";
import orders from "./orders";
import payments from "./payments";
import profile from "./profile";
import addresses from "./addresses";
import savedCart from "./savedCart";

const account = combineReducers({
  payments,
  files,
  orders,
  favorites,
  addresses,
  profile,
  savedCart
});

export default account;
