import { ReactElement } from 'react';

export type SelectOptions = {
  value: string;
  text: string;
};

export enum GenderType {
  male = 'male',
  female = 'female',
  other = 'other',
}

export type ProviderProps = {
  children: ReactElement;
};

export type LoadProductsRequestType = 'LOAD_PRODUCTS_REQUEST';
export type LoadProductsSuccessType = 'LOAD_PRODUCTS_SUCCESS';
export type LoadProductsFailType = 'LOAD_PRODUCTS_FAIL';

export type LoadCartRequestType = 'LOAD_CART_REQUEST';
export type LoadCartSuccessType = 'LOAD_CART_SUCCESS';
export type LoadCartFailType = 'LOAD_CART_FAIL';

export type AddCartRequestType = 'ADD_CART_REQUEST';
export type AddCartSuccessType = 'ADD_CART_SUCCESS';
export type AddCartFailType = 'ADD_CART_FAIL';

export type UpdateCartRequestType = 'UPDATE_CART_REQUEST';
export type UpdateCartSuccessType = 'UPDATE_CART_SUCCESS';
export type UpdateCartFailType = 'UPDATE_CART_FAIL';

export type DeleteCartRequestType = 'DELETE_CART_REQUEST';
export type DeleteCartSuccessType = 'DELETE_CART_SUCCESS';
export type DeleteCartFailType = 'DELETE_CART_FAIL';

export type LoginRequestType = 'LOGIN_REQUEST';
export type LoginSuccessType = 'LOGIN_SUCCESS';
export type LoginFailType = 'LOGIN_FAIL';

export type LogoutRequestType = 'LOGOUT_REQUEST';
export type LogoutSuccessType = 'LOGOUT_SUCCESS';
export type LogoutFailType = 'LOGOUT_FAIL';

export type RegisterRequestType = 'REGISTER_REQUEST';
export type RegisterSuccessType = 'REGISTER_SUCCESS';
export type RegisterFailType = 'REGISTER_FAIL';

export type ClearErrorType = 'CLEAR_ERROR';

// export enum LoadProductsActions {
//   LOAD_PRODUCTS_REQUEST = 'LOAD_PRODUCTS_REQUEST',
//   LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
//   LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL',
// }

// export enum LoadCartActions {
//   LOAD_CART_REQUEST = 'LOAD_CART_REQUEST',
//   LOAD_CART_SUCCESS = 'LOAD_CART_SUCCESS',
//   LOAD_CART_FAIL = 'LOAD_CART_FAIL',
// }

// export enum AddCartItemActions {
//   ADD_CART_REQUEST = 'ADD_CART_REQUEST',
//   ADD_CART_SUCCESS = 'ADD_CART_SUCCESS',
//   ADD_CART_FAIL = 'ADD_CART_FAIL',
// }

// export enum UpdateCartItemActions {
//   UPDATE_CART_REQUEST = 'UPDATE_CART_REQUEST',
//   UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS',
//   UPDATE_CART_FAIL = 'UPDATE_CART_FAIL',
// }

// export enum DeleteCartItemActions {
//   DELETE_CART_REQUEST = 'DELETE_CART_REQUEST',
//   DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS',
//   DELETE_CART_FAIL = 'DELETE_CART_FAIL',
// }

// export enum LoginActions {
//   LOGIN_REQUEST = 'LOGIN_REQUEST',
//   LOGIN_SUCCESS = 'LOGIN_SUCCESS',
//   LOGIN_FAIL = 'LOGIN_FAIL',
// }

// export enum LogoutActions {
//   LOGOUT_REQUEST = 'LOGOUT_REQUEST',
//   LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
//   LOGOUT_FAIL = 'LOGOUT_FAIL',
// }

// export enum RegisterActions {
//   REGISTER_REQUEST = 'REGISTER_REQUEST',
//   REGISTER_SUCCESS = 'REGISTER_SUCCESS',
//   REGISTER_FAIL = 'REGISTER_FAIL',
// }
