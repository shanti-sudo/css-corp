import { observer } from 'mobx-react';
import Login from './Login';

export default observer(Login);

// import { AppDispatch, RootStore } from 'configureStore';
// import { FormikHelpers } from 'formik';
// import { connect } from 'react-redux';
// import { loginRequest } from 'reducers/LoadingReducer';
// import Login from './Login';
// import { LoginInitValuesProps } from './loginUtils';

// // get data from store and add Props
// const mapStateToProps = (state: RootStore) => ({});

// // set date to store
// const mapDispatchToProps = (dispatch: AppDispatch) => ({
//   onLogin: (
//     values: LoginInitValuesProps,
//     formikHelpers: FormikHelpers<LoginInitValuesProps>,
//   ) => dispatch(loginRequest(values, formikHelpers)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
