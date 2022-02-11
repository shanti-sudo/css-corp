import { FormikHelpers } from 'formik';
import { makeAutoObservable, makeObservable, observable } from 'mobx';
import RootStore from 'mobxStore';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import AuthService from 'services/authService';
import { User } from 'types/authResponse';

export default class UserStore {
  rootStore: RootStore;

  private authenticated = false;

  private user: User | undefined;

  constructor(rootStore: RootStore, private readonly authService: AuthService) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
    this.authenticated = !!this.getAccessToken();
  }

  onLogin = async (
    values: LoginInitValuesProps,
    action: FormikHelpers<LoginInitValuesProps>,
  ) => {
    try {
      this.rootStore.loadingStore.addLoading();
      const res = await this.authService.login(values);
      this.setAuthentication(true);
      this.setUser(res.user);
      action.resetForm();
      sessionStorage.setItem('@app/token', res.accessToken);
    } catch (error) {
      let message = 'Something went wrong. Try after somtime';
      if (error instanceof Error) {
        message = error.message;
      }
      action.setErrors({ serverError: message });
    } finally {
      this.rootStore.loadingStore.removeLoading();
    }
  };

  onRegister = async (
    values: RegisterInitValues,
    action: FormikHelpers<RegisterInitValues>,
  ) => {
    try {
      const res = await this.authService.register(values);
      this.setAuthentication(true);
      this.setUser(res.user);
      action.resetForm();
      sessionStorage.setItem('@app/token', res.accessToken);
    } catch (error) {
      let message = 'Something went wrong. Try after somtime';
      if (error instanceof Error) {
        message = error.message;
      }
      action.setErrors({ serverError: message });
    }
  };

  onLogout = () => {
    sessionStorage.removeItem('@app/token');
    this.setAuthentication(false);
    this.setUser();
  };

  isAuthenticated = () => {
    return this.authenticated;
  };

  getUser = () => {
    return this.user;
  };

  private setAuthentication = (authenticated: boolean) => {
    this.authenticated = authenticated;
  };

  private getAccessToken() {
    return sessionStorage.getItem('@app/token');
  }

  private setUser = (user?: User) => {
    this.user = user;
  };
}
