import { FormikHelpers } from 'formik';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import {
  AddCartItemActions,
  DeleteCartItemActions,
  LoadCartActions,
  LoadProductsActions,
  LoginActions,
  RegisterActions,
  UpdateCartItemActions,
} from 'types';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';

export type InitialLoadActions = {
  type:
    | LoadProductsActions.LOAD_PRODUCTS_REQUEST
    | LoadCartActions.LOAD_CART_REQUEST;
  processId?: never;
  cartItem?: never;
  values?: never;
  formikHelpers?: never;
};

export type AddCartItemLoadingAction = {
  type: AddCartItemActions.ADD_CART_REQUEST;
  processId: number;
  cartItem?: never;
  values?: never;
  formikHelpers?: never;
};

export type ModifyCartItemLoadingAction = {
  type:
    | UpdateCartItemActions.UPDATE_CART_REQUEST
    | DeleteCartItemActions.DELETE_CART_REQUEST;
  processId: number;
  cartItem: CartResponse;
  values?: never;
  formikHelpers?: never;
};

export type LoginLoadingActionType = {
  type: LoginActions.LOGIN_REQUEST;
  values: LoginInitValuesProps;
  formikHelpers: FormikHelpers<LoginInitValuesProps>;
  processId?: never;
  cartItem?: never;
};

export type RegisterLoadingActionType = {
  type: RegisterActions.REGISTER_REQUEST;
  values: RegisterInitValues;
  formikHelpers: FormikHelpers<RegisterInitValues>;
  processId?: never;
  cartItem?: never;
};

export type LoadingActions =
  | InitialLoadActions
  | AddCartItemLoadingAction
  | ModifyCartItemLoadingAction
  | LoginLoadingActionType
  | RegisterLoadingActionType;

export type InitialLoadErrorActions = {
  type: LoadProductsActions.LOAD_PRODUCTS_FAIL | LoadCartActions.LOAD_CART_FAIL;
  processId?: never;
  key?: never;
  error: Error;
};

export type CartItemErrorActions = {
  type:
    | AddCartItemActions.ADD_CART_FAIL
    | UpdateCartItemActions.UPDATE_CART_FAIL
    | DeleteCartItemActions.DELETE_CART_FAIL;
  processId: number;
  error: Error;
  key?: never;
};

export type ClearErrorAction = {
  type: 'CLEAR_ERROR';
  key: string;
  error?: never;
  processId?: never;
};

export type ErrorActions =
  | InitialLoadErrorActions
  | CartItemErrorActions
  | ClearErrorAction;

export type LoadProductsSuccess = {
  type: LoadProductsActions.LOAD_PRODUCTS_SUCCESS;
  data: ProductResponse[];
  processId?: never;
};

export type LoadCartSuccess = {
  type: LoadCartActions.LOAD_CART_SUCCESS;
  data: CartResponse[];
  processId?: never;
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

export const loadProductsRequest = (): InitialLoadActions => ({
  type: LoadProductsActions.LOAD_PRODUCTS_REQUEST,
});

export const loadCartRequest = (): InitialLoadActions => ({
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
  cartItem: cartItem,
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
): CartItemErrorActions => ({
  type: UpdateCartItemActions.UPDATE_CART_FAIL,
  error,
  processId,
});

export const deleteCartItemFail = (
  error: Error,
  processId: number,
): CartItemErrorActions => ({
  type: DeleteCartItemActions.DELETE_CART_FAIL,
  error,
  processId,
});

export const addCartItemError = (
  error: Error,
  processId: number,
): CartItemErrorActions => ({
  type: AddCartItemActions.ADD_CART_FAIL,
  error,
  processId,
});

export const loadProductsFail = (error: Error): InitialLoadErrorActions => ({
  type: LoadProductsActions.LOAD_PRODUCTS_FAIL,
  error,
});

export const loadCartFail = (error: Error): InitialLoadErrorActions => ({
  type: LoadCartActions.LOAD_CART_FAIL,
  error,
});

export const deleteCartItemRequest = (
  cartItem: CartResponse,
): ModifyCartItemLoadingAction => ({
  type: DeleteCartItemActions.DELETE_CART_REQUEST,
  cartItem: cartItem,
  processId: cartItem.productId,
});

export const deleteCartItemSuccess = (
  cartItem: CartResponse,
  processId: number,
): ChangeCartSuccess => ({
  type: DeleteCartItemActions.DELETE_CART_SUCCESS,
  cartItem,
  processId,
});
