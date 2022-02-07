import { AxiosResponse } from 'axios';
import {
  addCartItemError,
  AddCartItemLoadingAction,
  addCartItemSuccess,
  deleteCartItemFail,
  deleteCartItemSuccess,
  loadCartFail,
  loadCartSuccess,
  ModifyCartItemLoadingAction,
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
  DeleteCartItemActions,
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
  yield takeLatest(DeleteCartItemActions.DELETE_CART_REQUEST, deleteCartItem);
}

function* updateCartItemRequest() {
  yield takeLatest(UpdateCartItemActions.UPDATE_CART_REQUEST, updateCartItem);
}

function* addCartItemRequest() {
  yield takeLatest(AddCartItemActions.ADD_CART_REQUEST, addCartItem);
}

function* loadCartRequest() {
  yield takeEvery(LoadCartActions.LOAD_CART_REQUEST, loadCart);
}

export default function* rootCart() {
  yield all([
    fork(loadCartRequest),
    fork(addCartItemRequest),
    fork(updateCartItemRequest),
    fork(deleteCartItemRequest),
  ]);
}
