import {
  CartActions,
  ErrorActions,
  LoadingActions,
  LoadProductsSuccess,
  RootAction,
  RootState,
} from './actionTypes';
import CartReducer from './CartReducer';
import ErrorReducer from './ErrorReducer';
import LoadingReducer from './LoadingReducer';
import ProductsReducer from './ProductsReducer';

export const RootInitialState = {
  products: [],
  cart: [],
  error: {},
  loading: {},
};

export default (state: RootState, action: RootAction) => {
  return {
    cart: CartReducer(state.cart, action as CartActions),
    products: ProductsReducer(state.products, action as LoadProductsSuccess),
    error: ErrorReducer(state.error, action as ErrorActions),
    loading: LoadingReducer(state.loading, action as LoadingActions),
  };
};
