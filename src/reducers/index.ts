import { combineReducers } from 'redux';
import products from './ProductsReducer';
import error from './ErrorReducer';
import loading from './LoadingReducer';
import cart from './CartReducer';

export default combineReducers({
  products,
  error,
  loading,
  cart,
});
