import { AxiosResponse } from 'axios';
import { loadProductsFail, loadProductsSuccess } from 'reducers/actionTypes';
import { takeEvery, call, put } from 'redux-saga/effects';
import { LoadProductsActions } from 'types';
import { ProductResponse } from 'types/ProductResponse';
import axiosInstance from 'utils/axios';

function* loadProducts() {
  try {
    const res: AxiosResponse<ProductResponse[]> = yield call(
      axiosInstance.get,
      '660/products',
    );
    yield put(loadProductsSuccess(res.data));
  } catch (error) {
    yield put(loadProductsFail(error as Error));
  }
}

function* loadProductsRequest() {
  yield takeEvery(LoadProductsActions.LOAD_PRODUCTS_REQUEST, loadProducts);
}

export default function* rootProducts() {
  yield loadProductsRequest();
}
