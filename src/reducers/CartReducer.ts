import {
  ADD_CART_SUCCESS,
  DELETE_CART_SUCCESS,
  LOAD_CART_SUCCESS,
  UPDATE_CART_SUCCESS,
} from 'constants/actionTypes';
import {
  AddCartSuccessType,
  DeleteCartSuccessType,
  LoadCartSuccessType,
  UpdateCartSuccessType,
} from 'types';
import { CartResponse } from 'types/CartResponse';

export type LoadCartSuccess = {
  type: LoadCartSuccessType;
  data: CartResponse[];
  processId?: never;
};

export type ChangeCartSuccess = {
  type: AddCartSuccessType | UpdateCartSuccessType | DeleteCartSuccessType;
  cartItem: CartResponse;
  processId: number;
};

export type CartActions = LoadCartSuccess | ChangeCartSuccess;

export const loadCartSuccess = (data: CartResponse[]): LoadCartSuccess => ({
  type: LOAD_CART_SUCCESS,
  data,
});

export const addCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: ADD_CART_SUCCESS,
  cartItem,
  processId,
});

export const updateCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: UPDATE_CART_SUCCESS,
  cartItem,
  processId,
});

export const deleteCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: DELETE_CART_SUCCESS,
  cartItem,
  processId,
});

const cartInitialState: CartResponse[] = [];

export default (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    case LOAD_CART_SUCCESS:
      return action.data;

    case ADD_CART_SUCCESS:
      return [...state, action.cartItem];

    case UPDATE_CART_SUCCESS:
      return state.map((item) => {
        if (item.id === action.cartItem.id) {
          return action.cartItem;
        }
        return item;
      });

    case DELETE_CART_SUCCESS:
      return state.filter((item) => item.id !== action.cartItem.id);

    default:
      return state;
  }
};
