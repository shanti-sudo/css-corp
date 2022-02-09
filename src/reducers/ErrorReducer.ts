import {
  ADD_CART_FAIL,
  CLEAR_ERROR,
  DELETE_CART_FAIL,
  LOAD_CART_FAIL,
  LOAD_PRODUCTS_FAIL,
  LOGIN_FAIL,
  LOGOUT_FAIL,
  REGISTER_FAIL,
  UPDATE_CART_FAIL,
} from 'constants/actionTypes';
import {
  AddCartFailType,
  ClearErrorType,
  DeleteCartFailType,
  LoadCartFailType,
  LoadProductsFailType,
  LoginFailType,
  LogoutFailType,
  RegisterFailType,
  UpdateCartFailType,
} from 'types';

export type InitialLoadErrorActions = {
  type:
    | LoadProductsFailType
    | LoadCartFailType
    | LoginFailType
    | LogoutFailType
    | RegisterFailType;
  error: Error;
  processId?: never;
  key?: never;
};

export type CartItemErrorActions = {
  type: AddCartFailType | UpdateCartFailType | DeleteCartFailType;
  error: Error;
  processId: number;
  key?: never;
};

export type ClearErrorAction = {
  type: ClearErrorType;
  key: string;
  error?: never;
  processId?: never;
};

type ErrorActions =
  | InitialLoadErrorActions
  | CartItemErrorActions
  | ClearErrorAction;

export const updateCartItemFail = (
  error: Error,
  processId: number,
): CartItemErrorActions => ({
  type: UPDATE_CART_FAIL,
  error,
  processId,
});

export const deleteCartItemFail = (
  error: Error,
  processId: number,
): CartItemErrorActions => ({
  type: DELETE_CART_FAIL,
  error,
  processId,
});

export const addCartItemError = (
  error: Error,
  processId: number,
): CartItemErrorActions => ({
  type: ADD_CART_FAIL,
  error,
  processId,
});

export const loadProductsFail = (error: Error): InitialLoadErrorActions => ({
  type: LOAD_PRODUCTS_FAIL,
  error,
});

export const loadCartFail = (error: Error): InitialLoadErrorActions => ({
  type: LOAD_CART_FAIL,
  error,
});

export const loginFail = (error: Error): InitialLoadErrorActions => ({
  type: LOGIN_FAIL,
  error,
});

export const registerFail = (error: Error): InitialLoadErrorActions => ({
  type: REGISTER_FAIL,
  error,
});

export const logoutFail = (error: Error): InitialLoadErrorActions => ({
  type: LOGOUT_FAIL,
  error,
});

export default (
  state: any = {},
  { type, processId, error, key }: ErrorActions,
) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (matches) {
    const id = processId ? `_${processId}` : '';
    if (matches[2] === 'FAIL') {
      return { ...state, [`${matches[1]}${id}`]: error };
    }
    const { [`${matches[1]}${id}`]: rm, ...data } = state;
    return data;
  } else if (type === CLEAR_ERROR) {
    const { [`${key}`]: rm, ...data } = state;
    return data;
  } else {
    return state;
  }
};
