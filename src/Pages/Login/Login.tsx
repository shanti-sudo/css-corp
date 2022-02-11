import React, { memo, useMemo } from 'react';
import { FastField } from 'formik';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import { LoginFields, LoginInitValues } from './loginUtils';
import CustomForm from 'components/CustomForm';
import { useAuthStore } from 'context/authStoreContext';

const Login = ({}: Props) => {
  const { userStore, loadingStore } = useAuthStore();

  const isLoginInProcess = loadingStore.isLoading(['login', 'register']);

  const btnProps = useMemo(
    () => ({
      children: 'Sign In',
    }),
    [],
  );

  return (
    <CustomForm
      initialValues={LoginInitValues}
      fields={LoginFields}
      onSubmit={userStore.onLogin}
      btnProps={btnProps}
    >
      <div className="flex items-center justify-between">
        <FastField name="remember_me" component={Checkbox}>
          Remember Me
        </FastField>
        <Link href="#">Forgot password?</Link>
      </div>
    </CustomForm>
  );
};

export default Login;
