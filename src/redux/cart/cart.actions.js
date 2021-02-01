import { CART_ACTIONS_TYPES } from './cart.types';

export const toggleCartVisibility = () => ({
  type: CART_ACTIONS_TYPES.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: CART_ACTIONS_TYPES.ADD_ITEM,
  payload: item,
});

export const removeItem = (cartItem) => ({
  type: CART_ACTIONS_TYPES.REMOVE_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (item) => ({
  type: CART_ACTIONS_TYPES.CLEAR_ITEM,
  payload: item,
});
