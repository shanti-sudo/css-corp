import { AxiosResponse } from 'axios';
import { LOAD_PRODUCTS_REQUEST } from 'constants/actionTypes';
import { loadProductsFail } from 'reducers/ErrorReducer';
import { loadProductsSuccess } from 'reducers/ProductsReducer';
import { takeEvery, call, put } from 'redux-saga/effects';
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
  yield takeEvery(LOAD_PRODUCTS_REQUEST, loadProducts);
}

export default function* rootProducts() {
  yield loadProductsRequest();
}
