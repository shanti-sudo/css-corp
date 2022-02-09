import {
  ADD_CART_REQUEST,
  DELETE_CART_REQUEST,
  LOAD_CART_REQUEST,
  LOAD_PRODUCTS_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  UPDATE_CART_REQUEST,
} from 'constants/actionTypes';
import { FormikHelpers } from 'formik';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import {
  AddCartRequestType,
  DeleteCartRequestType,
  LoadCartRequestType,
  LoadProductsRequestType,
  LoginRequestType,
  LogoutRequestType,
  RegisterRequestType,
  UpdateCartRequestType,
} from 'types';
import { CartResponse } from 'types/CartResponse';

export type InitialLoadActions = {
  type: LoadProductsRequestType | LoadCartRequestType | LogoutRequestType;
  processId?: never;
  cartItem?: never;
  values?: never;
  formikHelpers?: never;
};

export type AddCartItemLoadingAction = {
  type: AddCartRequestType;
  processId: number;
  cartItem?: never;
  values?: never;
  formikHelpers?: never;
};

export type ModifyCartItemLoadingAction = {
  type: UpdateCartRequestType | DeleteCartRequestType;
  processId: number;
  cartItem: CartResponse;
  values?: never;
  formikHelpers?: never;
};

export type LoginLoadingActionType = {
  type: LoginRequestType;
  values: LoginInitValuesProps;
  formikHelpers: FormikHelpers<LoginInitValuesProps>;
  processId?: never;
  cartItem?: never;
};

export type RegisterLoadingActionType = {
  type: RegisterRequestType;
  values: RegisterInitValues;
  formikHelpers: FormikHelpers<RegisterInitValues>;
  processId?: never;
  cartItem?: never;
};

type LoadingActions =
  | InitialLoadActions
  | AddCartItemLoadingAction
  | ModifyCartItemLoadingAction
  | LoginLoadingActionType
  | RegisterLoadingActionType;

export const loadProductsRequest = (): InitialLoadActions => ({
  type: LOAD_PRODUCTS_REQUEST,
});

export const loadCartRequest = (): InitialLoadActions => ({
  type: LOAD_CART_REQUEST,
});

export const addCartItemRequest = (processId: number): LoadingActions => ({
  type: ADD_CART_REQUEST,
  processId,
});

export const updateCartItemRequest = (
  cartItem: CartResponse,
): LoadingActions => ({
  type: UPDATE_CART_REQUEST,
  cartItem: cartItem,
  processId: cartItem.productId,
});

export const deleteCartItemRequest = (
  cartItem: CartResponse,
): ModifyCartItemLoadingAction => ({
  type: DELETE_CART_REQUEST,
  cartItem: cartItem,
  processId: cartItem.productId,
});

export const loginRequest = (
  values: LoginInitValuesProps,
  formikHelpers: FormikHelpers<LoginInitValuesProps>,
): LoginLoadingActionType => ({ type: LOGIN_REQUEST, values, formikHelpers });

export const registerRequest = (
  values: RegisterInitValues,
  formikHelpers: FormikHelpers<RegisterInitValues>,
): RegisterLoadingActionType => ({
  type: REGISTER_REQUEST,
  values,
  formikHelpers,
});

export const logoutRequest = (): InitialLoadActions => ({
  type: LOGOUT_REQUEST,
});

export default (state: any = {}, { type, processId }: LoadingActions) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;
  const id = processId ? `_${processId}` : '';
  if (matches[2] === 'REQUEST') {
    return { ...state, [`${matches[1]}${id}`]: true };
  }
  const { [`${matches[1]}${id}`]: rm, ...loading } = state;
  return loading;
};
