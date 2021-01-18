import { CART_ACTIONS_TYPES } from './cart.types';

export const toggleCartVisibility = () => ({
  type: CART_ACTIONS_TYPES.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: CART_ACTIONS_TYPES.ADD_ITEM,
  payload: item,
});
