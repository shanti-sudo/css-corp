import { AxiosResponse } from 'axios';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
} from 'constants/actionTypes';
import { loginFail, logoutFail, registerFail } from 'reducers/ErrorReducer';
import {
  LoginLoadingActionType,
  RegisterLoadingActionType,
} from 'reducers/LoadingReducer';
import {
  loginSuccessAction,
  logoutSuccessAction,
  registerSuccessAction,
} from 'reducers/userReducer';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { AuthResponse } from 'types/authResponse';
import axiosInstance from 'utils/axios';

function* login({ values, formikHelpers }: LoginLoadingActionType) {
  try {
    const { serverError, remember_me, ...rest } = values;
    const res: AxiosResponse<AuthResponse> = yield call(
      axiosInstance.post,
      'login',
      rest,
    );
    formikHelpers.resetForm();
    sessionStorage.setItem('@app/token', res.data.accessToken);
    yield put(loginSuccessAction(res.data.user));
  } catch (error) {
    let message = 'Something went wrong. Try after somtime';
    if (error instanceof Error) {
      message = error.message;
    }
    formikHelpers.setErrors({ serverError: message });
    yield put(loginFail(error as Error));
  } finally {
    formikHelpers.setSubmitting(false);
  }
}

function* logout() {
  try {
    sessionStorage.removeItem('@app/token');
    yield put(logoutSuccessAction());
  } catch (error) {
    yield put(logoutFail(error as Error));
  }
}

function* register({ values, formikHelpers }: RegisterLoadingActionType) {
  try {
    const { serverError, confirmPassword, ...rest } = values;
    const res: AxiosResponse<AuthResponse> = yield call(
      axiosInstance.post,
      'register',
      rest,
    );
    formikHelpers.resetForm();
    sessionStorage.setItem('@app/token', res.data.accessToken);
    yield put(registerSuccessAction(res.data.user));
  } catch (error) {
    let message = 'Something went wrong. Try after somtime';
    if (error instanceof Error) {
      message = error.message;
    }
    formikHelpers.setErrors({ serverError: message });
    yield put(registerFail(error as Error));
  } finally {
    formikHelpers.setSubmitting(false);
  }
}

function* loginRequest() {
  yield takeLatest(LOGIN_REQUEST, login);
}

function* logoutRequest() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* registerRequest() {
  yield takeLatest(REGISTER_REQUEST, register);
}

export default function* rootUser() {
  yield all([fork(loginRequest), fork(logoutRequest), fork(registerRequest)]);
}
