import { CART_ACTIONS_TYPES } from './cart.types';

const INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
  //cartItems: {},
};

const addItem = (itemToAdd, cartItems) => {
  const item = cartItems[itemToAdd.id];
  return item
    ? {
        ...cartItems,
        [itemToAdd.id]: {
          ...cartItems[itemToAdd.id],
          quantity: cartItems[itemToAdd.id].quantity + 1,
        },
      }
    : { ...cartItems, [itemToAdd.id]: { ...itemToAdd, quantity: 1 } };
};

const addItemWithArray = (itemToAdd, cartItems) => {
  const item = cartItems.find((item) => item.id === itemToAdd.id);
  return item
    ? cartItems.map((item) =>
        item.id === itemToAdd.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    : [...cartItems, { ...itemToAdd, quantity: 1 }];
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
        //cartItems: addItem(action.payload, state.cartItems),
      };
    default:
      return state;
  }
};
