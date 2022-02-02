import { AppDispatch } from 'configureStore';
import { CartResponse } from 'types/CartResponse';
import axiosInstance from 'utils/axios';

export const loadCart = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: 'LOAD_CART_REQUEST',
    });
    const res = await axiosInstance.get<CartResponse[]>('660/cart');
    dispatch({
      type: 'LOAD_CART_SUCCESS',
      data: res.data,
    });
  } catch (error) {
    dispatch({ type: 'LOAD_CART_FAIL', error: error as Error });
  }
};
