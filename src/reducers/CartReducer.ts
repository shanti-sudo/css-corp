import { CartResponse } from 'types/CartResponse';
import { CartActions } from './actionTypes';

const cartInitialState: CartResponse[] = [];

export default (state = cartInitialState, action: CartActions) => {
  switch (action.type) {
    case 'LOAD_CART_SUCCESS':
      return action.data;

    case 'ADD_CART_SUCCESS':
      return [...state, action.cartItem];

    case 'UPDATE_CART_SUCCESS':
      return state.map((item) => {
        if (item.id === action.cartItem.id) {
          return action.cartItem;
        }
        return item;
      });

    case 'DELETE_CART_SUCCESS':
      return state.filter((item) => item.id !== action.cartItem.id);

    default:
      return state;
  }
};
