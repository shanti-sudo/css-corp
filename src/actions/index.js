import { LoadProductsActions } from 'types';

export const loadProductsRequest: LoadingActions = () => ({
  type: LoadProductsActions.LOAD_PRODUCTS_REQUEST,
});

export const loadProductsSuccess = (data) => ({
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS,
  data,
});
