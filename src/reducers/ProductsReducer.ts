import { ProductResponse } from 'types/ProductResponse';
import { LoadProductsSuccess } from './actionTypes';

export const productsInitialState: ProductResponse[] = [];

export default (
  state: ProductResponse[] = productsInitialState,
  action: LoadProductsSuccess,
) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return action.data;

    default:
      return state;
  }
};
