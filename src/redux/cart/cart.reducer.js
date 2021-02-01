import { CART_ACTIONS_TYPES } from './cart.types';
import {
  addItemWithArray,
  addItemWithObject,
  removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
  //cartItems: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case CART_ACTIONS_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemWithArray(action.payload, state.cartItems),
        //cartItems: addItemWithObject(action.payload, state.cartItems),
      };
    case CART_ACTIONS_TYPES.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CART_ACTIONS_TYPES.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
