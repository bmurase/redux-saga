import { combineReducers } from "redux";
import { cart } from "./cart/reducer";

/**
 * Necessário para que o state composto pelos reducers sejam no formato que
 * o reducer realmente está retornando.
 * Sem ele, o state.cart retornado pelo useSelector seria uma função,
 * e não o retorno da própria.
 * O rootReducer é utilizado no createStore.
 */

export default combineReducers({
  cart,
})