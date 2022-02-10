import { AxiosResponse } from 'axios';
import { FormikHelpers } from 'formik';
import { makeAutoObservable } from 'mobx';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { AuthResponse } from 'types/authResponse';
import axiosInstance from 'utils/axios';

export default class User {
  user = {};

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  *onLogin(
    values: LoginInitValuesProps,
    action: FormikHelpers<LoginInitValuesProps>,
  ) {
    try {
      const { serverError, remember_me, ...rest } = values;

      const res: AxiosResponse<AuthResponse> = yield axiosInstance.post(
        'login',
        rest,
      );
      this.user = res.data.user;
    } catch (error) {}
  }
}
