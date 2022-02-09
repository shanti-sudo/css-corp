import { LOAD_PRODUCTS_SUCCESS } from 'constants/actionTypes';
import { LoadProductsSuccessType } from 'types';
import { ProductResponse } from 'types/ProductResponse';

export type LoadProductsSuccess = {
  type: LoadProductsSuccessType;
  data: ProductResponse[];
  processId?: never;
};

export const loadProductsSuccess = (
  data: ProductResponse[],
): LoadProductsSuccess => ({
  type: LOAD_PRODUCTS_SUCCESS,
  data,
});

export const productsInitialState: ProductResponse[] = [];

export default (
  state: ProductResponse[] = productsInitialState,
  action: LoadProductsSuccess,
) => {
  switch (action.type) {
    case LOAD_PRODUCTS_SUCCESS:
      return action.data;

    default:
      return state;
  }
};
