import { combineReducers } from "redux";
import cart from './cart/reducer';
import modal from './modal/reducer';

export default combineReducers({
  cart,
  modal,
})