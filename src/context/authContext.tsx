import { FormikHelpers } from 'formik';
import { LoginInitValuesProps } from 'Pages/Login/loginUtils';
import { RegisterInitValues } from 'Pages/Register/registerIUtils';
import React, {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ProviderProps } from 'types';
import { AuthResponse } from 'types/authResponse';
import axiosInstance from 'utils/axios';

type AuthContextType = {
  user?: AuthResponse;
  onLogin: (
    values: LoginInitValuesProps,
    formikHelpers: FormikHelpers<LoginInitValuesProps>,
  ) => Promise<void>;
  onRegister: (
    values: RegisterInitValues,
    formikHelpers: FormikHelpers<RegisterInitValues>,
  ) => Promise<void>;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  onLogin: async () => {},
  onRegister: async () => {},
  onLogout: () => {},
});

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<AuthResponse>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('@app/token');
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const onLogin = useCallback(
    async (
      values: LoginInitValuesProps,
      formikHelpers: FormikHelpers<LoginInitValuesProps>,
    ) => {
      try {
        const { serverError, ...rest } = values;
        const res = await axiosInstance.post<AuthResponse>('login', rest);
        formikHelpers.resetForm();
        sessionStorage.setItem('@app/token', JSON.stringify(res.data));
        navigate('/home', { replace: true });
        setUser(res.data);
      } catch (error) {
        let message = 'Something went wrong. Try after somtime';
        if (error instanceof Error) {
          message = error.message;
        }
        formikHelpers.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onRegister = useCallback(
    async (
      values: RegisterInitValues,
      formikHelpers: FormikHelpers<RegisterInitValues>,
    ) => {
      try {
        const { confirmPassword, serverError, ...rest } = values;
        const res = await axiosInstance.post<AuthResponse>('register', rest);
        formikHelpers.resetForm();
        sessionStorage.setItem('@app/token', JSON.stringify(res.data));
        navigate('/home', { replace: true });
        setUser(res.data);
      } catch (error) {
        let message = 'Something went wrong. Try after somtime';
        if (error instanceof Error) {
          message = error.message;
        }
        formikHelpers.setErrors({ serverError: message });
      }
    },
    [],
  );

  const onLogout = useCallback(() => {
    sessionStorage.removeItem('@app/token');
    navigate('/', { replace: true });
    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};