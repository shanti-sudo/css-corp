import { AxiosResponse } from 'axios';
import {
  addCartItemError,
  addCartItemSuccess,
  loadCartFail,
  loadCartSuccess,
  updateCartItemFail,
  updateCartItemSuccess,
} from 'reducers/actionTypes';
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  AddCartItemActions,
  LoadCartActions,
  UpdateCartItemActions,
} from 'types';
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

function* addCartItem(productId: number) {
  try {
    const res: AxiosResponse<CartResponse> = yield call(
      axiosInstance.post,
      '660/cart',
      {
        quantity: 1,
        productId,
      },
    );
    yield put(addCartItemSuccess(res.data, productId));
  } catch (error) {
    yield put(addCartItemError(error as Error, productId));
  }
}

function* updateCartItem(cartItem: CartResponse) {
  try {
    const res: AxiosResponse<CartResponse> = yield call(
      axiosInstance.put,
      `660/cart/${cartItem.id}`,
      cartItem,
    );
    yield put(updateCartItemSuccess(res.data, cartItem.productId));
  } catch (error) {
    yield put(updateCartItemFail(error as Error, cartItem.productId));
  }
}

function* loadCartRequest() {
  yield takeEvery(LoadCartActions.LOAD_CART_REQUEST, loadCart);
}

function* addCartItemRequest() {
  yield takeLatest(AddCartItemActions.ADD_CART_REQUEST, addCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest(UpdateCartItemActions.UPDATE_CART_REQUEST, updateCartItem);
}

export default function* rootCart() {
  yield all([fork(loadCartRequest), fork(addCartItemRequest)]);
}
