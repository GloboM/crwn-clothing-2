import { SET_CURRENT_USER } from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
