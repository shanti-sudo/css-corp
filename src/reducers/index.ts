import { combineReducers } from 'redux';
import products from './ProductsReducer';
import error from './ErrorReducer';
import loading from './LoadingReducer';
import cart from './CartReducer';
import user from './userReducer';

export default combineReducers({
  products,
  error,
  loading,
  cart,
  user,
});
