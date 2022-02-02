import { User } from 'types/authResponse';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type LoadingActions = {
  type:
    | 'LOAD_PRODUCTS_REQUEST'
    | 'LOAD_CART_REQUEST'
    | 'ADD_CART_REQUEST'
    | 'UPDATE_CART_REQUEST'
    | 'DELETE_CART_REQUEST';
  processId?: number;
};

export type ErrorActions = {
  type:
    | 'LOAD_PRODUCTS_FAIL'
    | 'LOAD_CART_FAIL'
    | 'ADD_CART_FAIL'
    | 'UPDATE_CART_FAIL'
    | 'DELETE_CART_FAIL'
    | 'CLEAR_ERROR';
  processId?: number;
  error: Error;
  key?: string;
};

export type LoadProductsSuccess = {
  type: 'LOAD_PRODUCTS_SUCCESS';
  data: ProductResponse[];
  processId?: number;
};

export type LoadCartSuccess = {
  type: 'LOAD_CART_SUCCESS';
  data: CartResponse[];
  processId?: number;
};

export type ChangeCartSuccess = {
  type: 'ADD_CART_SUCCESS' | 'UPDATE_CART_SUCCESS' | 'DELETE_CART_SUCCESS';
  cartItem: CartResponse;
  processId: number;
};

export type CartActions = LoadCartSuccess | ChangeCartSuccess;

export type RootState = {
  products: ProductResponse[];
  cart: CartResponse[];
  error: any;
  loading: any;
};

export type UserActionType = {
  type: '';
};

export type RootAction =
  | LoadingActions
  | ErrorActions
  | LoadProductsSuccess
  | CartActions;
