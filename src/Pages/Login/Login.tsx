import React, { useContext, useMemo } from 'react';
import { FastField, FormikHelpers } from 'formik';
import Checkbox from 'components/Checkbox';
import Link from 'components/Link';
import {
  LoginFields,
  LoginInitValues,
  LoginInitValuesProps,
} from './loginUtils';
import CustomForm from 'components/CustomForm';
import User from 'mobxStore/user';
import { toJS } from 'mobx';

const user = new User();

type Props = {
  // onLogin: (
  //   values: LoginInitValuesProps,
  //   formikHelpers: FormikHelpers<LoginInitValuesProps>,
  // ) => void;
};

const Login = ({}: Props) => {
  const btnProps = useMemo(
    () => ({
      children: 'Sign In',
    }),
    [],
  );

  console.log(toJS(user.user));

  const onLogin = async (
    values: LoginInitValuesProps,
    action: FormikHelpers<LoginInitValuesProps>,
  ) => {
    await user.onLogin(values, action);
  };

  return (
    <CustomForm
      initialValues={LoginInitValues}
      fields={LoginFields}
      onSubmit={onLogin}
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
