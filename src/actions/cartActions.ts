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

export const addCart = (productId: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch({
      type: 'ADD_CART_REQUEST',
      processId: productId,
    });
    const res = await axiosInstance.post<CartResponse>('660/cart', {
      quantity: 1,
      productId,
    });

    dispatch({
      type: 'ADD_CART_SUCCESS',
      cartItem: res.data,
      processId: productId,
    });
  } catch (error) {
    dispatch({
      type: 'ADD_CART_FAIL',
      error: error as Error,
      processId: productId,
    });
    console.error(error);
  }
};

export const updateCartItem =
  (cartItem: CartResponse) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'UPDATE_CART_REQUEST',
        processId: cartItem.productId,
      });
      const res = await axiosInstance.put<CartResponse>(
        `660/cart/${cartItem.id}`,
        cartItem,
      );
      dispatch({
        type: 'UPDATE_CART_SUCCESS',
        cartItem: res.data,
        processId: cartItem.productId,
      });
    } catch (error) {
      dispatch({
        type: 'UPDATE_CART_FAIL',
        error: error as Error,
        processId: cartItem.productId,
      });
      console.error(error);
    }
  };

export const deleteCartItem =
  (cartItem: CartResponse) => async (dispatch: AppDispatch) => {
    try {
      dispatch({
        type: 'DELETE_CART_REQUEST',
        processId: cartItem.productId,
      });
      await axiosInstance.delete<CartResponse>(`660/cart/${cartItem.id}`);
      dispatch({
        type: 'DELETE_CART_SUCCESS',
        cartItem,
        processId: cartItem.productId,
      });
    } catch (error) {
      dispatch({
        type: 'DELETE_CART_FAIL',
        error: error as Error,
        processId: cartItem.productId,
      });
      console.error(error);
    }
  };
