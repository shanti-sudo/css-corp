import { AppDispatch } from 'configureStore';
import { ProductResponse } from 'types/ProductResponse';
import axiosInstance from 'utils/axios';

export const loadProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'LOAD_PRODUCTS_REQUEST',
      });
      const res = await axiosInstance.get<ProductResponse[]>('660/products');
      dispatch({
        type: 'LOAD_PRODUCTS_SUCCESS',
        data: res.data,
      });
    } catch (error) {
      dispatch({ type: 'LOAD_PRODUCTS_FAIL', error: error as Error });
    }
  };
};
