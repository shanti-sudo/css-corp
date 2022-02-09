import { AxiosResponse } from 'axios';
import {
  ADD_CART_REQUEST,
  DELETE_CART_REQUEST,
  LOAD_CART_REQUEST,
  UPDATE_CART_REQUEST,
} from 'constants/actionTypes';
import {
  addCartItemSuccess,
  deleteCartItemSuccess,
  loadCartSuccess,
  updateCartItemSuccess,
} from 'reducers/CartReducer';
import {
  addCartItemError,
  deleteCartItemFail,
  loadCartFail,
  updateCartItemFail,
} from 'reducers/ErrorReducer';
import {
  AddCartItemLoadingAction,
  ModifyCartItemLoadingAction,
} from 'reducers/LoadingReducer';

import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { CartResponse } from 'types/CartResponse';
import axiosInstance from 'utils/axios';

function* loadCart() {
  try {
    const res: AxiosResponse<CartResponse[]> = yield call(
      axiosInstance.get,
      '660/cart',
    );
    yield put(loadCartSuccess(res.data));
  } catch (error) {
    yield put(loadCartFail(error as Error));
  }
}

function* addCartItem({ processId }: AddCartItemLoadingAction) {
  try {
    const res: AxiosResponse<CartResponse> = yield call(
      axiosInstance.post,
      '660/cart',
      {
        quantity: 1,
        productId: processId,
      },
    );

    yield put(addCartItemSuccess(res.data, processId));
  } catch (error) {
    yield put(addCartItemError(error as Error, processId));
  }
}

function* updateCartItem({ processId, cartItem }: ModifyCartItemLoadingAction) {
  try {
    const res: AxiosResponse<CartResponse> = yield call(
      axiosInstance.put,
      `660/cart/${cartItem.id}`,
      cartItem,
    );
    yield put(updateCartItemSuccess(res.data, processId));
  } catch (error) {
    updateCartItemFail(error as Error, processId);
  }
}

function* deleteCartItem({ processId, cartItem }: ModifyCartItemLoadingAction) {
  try {
    yield call(axiosInstance.delete, `660/cart/${cartItem.id}`);
    yield put(deleteCartItemSuccess(cartItem, processId));
  } catch (error) {
    yield put(deleteCartItemFail(error as Error, processId));
  }
}

function* deleteCartItemRequest() {
  yield takeLatest(DELETE_CART_REQUEST, deleteCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest(UPDATE_CART_REQUEST, updateCartItem);
}

function* addCartItemRequest() {
  yield takeLatest(ADD_CART_REQUEST, addCartItem);
}

function* loadCartRequest() {
  yield takeEvery(LOAD_CART_REQUEST, loadCart);
}

export default function* rootCart() {
  yield all([
    fork(loadCartRequest),
    fork(addCartItemRequest),
    fork(updateCartItemRequest),
    fork(deleteCartItemRequest),
  ]);
}
