import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type ProductReducerType = {
  cart: CartResponse[];
  products: ProductResponse[];
};

export const productsInitialState = {
  cart: [],
  products: [],
};

type LoadDataSuccess = {
  type: 'LOAD_DATA_SUCCESS';
  data: ProductReducerType;
};

type ChangeCartSuccess = {
  type: 'ADD_CART_SUCCESS' | 'UPDATE_CART_SUCCESS' | 'DELETE_CART_SUCCESS';
  cartItem: CartResponse;
};

type ProductActionType = LoadDataSuccess | ChangeCartSuccess;

export default (state: ProductReducerType, action: ProductActionType) => {
  switch (action.type) {
    case 'LOAD_DATA_SUCCESS':
      return { ...state, ...action.data };

    case 'ADD_CART_SUCCESS':
      return { ...state, cart: [...state.cart, action.cartItem] };

    case 'UPDATE_CART_SUCCESS':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.cartItem.id) {
            return action.cartItem;
          }
          return item;
        }),
      };

    case 'DELETE_CART_SUCCESS':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.cartItem.id),
      };

    default:
      return state;
  }
};