import { CART_ACTIONS_TYPES } from './cart.types';

const INITIAL_STATE = {
  isVisible: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS_TYPES.TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
