import {
  AddCartItemActions,
  DeleteCartItemActions,
  LoadCartActions,
  LoadProductsActions,
  UpdateCartItemActions,
} from 'types';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type LoadingActions = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_REQUEST
    | LoadCartActions.LOAD_CART_REQUEST
    | AddCartItemActions.ADD_CART_REQUEST
    | UpdateCartItemActions.UPDATE_CART_REQUEST
    | DeleteCartItemActions.DELETE_CART_REQUEST;
  processId?: number;
};

export type ErrorActions = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_FAIL
    | LoadCartActions.LOAD_CART_FAIL
    | AddCartItemActions.ADD_CART_FAIL
    | UpdateCartItemActions.UPDATE_CART_FAIL
    | DeleteCartItemActions.DELETE_CART_FAIL
    | 'CLEAR_ERROR';
  processId?: number;
  error: Error;
  key?: string;
};

export type LoadProductsSuccess = {
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS;
  data: ProductResponse[];
  processId?: number;
};

export type LoadCartSuccess = {
  type: LoadCartActions.LOAD_CART_SUCCESS;
  data: CartResponse[];
  processId?: number;
};

export type ChangeCartSuccess = {
  type:
    | AddCartItemActions.ADD_CART_SUCCESS
    | UpdateCartItemActions.UPDATE_CART_SUCCESS
    | DeleteCartItemActions.DELETE_CART_SUCCESS;
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

export const loadProductsRequest = (): LoadingActions => ({
  type: LoadProductsActions.LOAD_PRODUCTS_REQUEST,
});

export const loadCartRequest = (): LoadingActions => ({
  type: LoadCartActions.LOAD_CART_REQUEST,
});

export const loadCartSuccess = (data: CartResponse[]): LoadCartSuccess => ({
  type: LoadCartActions.LOAD_CART_SUCCESS,
  data,
});

export const loadProductsSuccess = (
  data: ProductResponse[],
): LoadProductsSuccess => ({
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS,
  data,
});

export const addCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: AddCartItemActions.ADD_CART_SUCCESS,
  cartItem,
  processId,
});

export const addCartItemRequest = (processId: number): LoadingActions => ({
  type: AddCartItemActions.ADD_CART_REQUEST,
  processId,
});

export const updateCartItemRequest = (
  cartItem: CartResponse,
): LoadingActions => ({
  type: UpdateCartItemActions.UPDATE_CART_REQUEST,
  processId: cartItem.productId,
});

export const updateCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: UpdateCartItemActions.UPDATE_CART_SUCCESS,
  cartItem,
  processId,
});

export const updateCartItemFail = (
  error: Error,
  processId: number,
): ErrorActions => ({
  type: UpdateCartItemActions.UPDATE_CART_FAIL,
  error,
  processId,
});

export const addCartItemError = (
  error: Error,
  processId: number,
): ErrorActions => ({
  type: AddCartItemActions.ADD_CART_FAIL,
  error,
  processId,
});

export const loadProductsFail = (error: Error): ErrorActions => ({
  type: LoadProductsActions.LOAD_PRODUCTS_FAIL,
  error,
});

export const loadCartFail = (error: Error): ErrorActions => ({
  type: LoadCartActions.LOAD_CART_FAIL,
  error,
});
