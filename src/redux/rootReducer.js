import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // it defaults for localstorage forr web;

import authReducer from './auth/auth.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // We whitelisted only the cart reducer beacause auth is managed already by firbase
};
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
export default persistReducer(persistConfig, rootReducer);
