import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import { AuthResponse } from 'types/authResponse';
import axiosInstance from 'utils/axios';

export default class AuthService {
  login = async (loginData: LoginInitValuesProps) => {
    const { serverError, remember_me, ...rest } = loginData;
    const res = await axiosInstance.post<AuthResponse>('login', rest);
    return res.data;
  };

  register = async (registerData: RegisterInitValues) => {
    const { serverError, confirmPassword, ...rest } = registerData;
    const res = await axiosInstance.post<AuthResponse>('register', rest);
    return res.data;
  };
}
