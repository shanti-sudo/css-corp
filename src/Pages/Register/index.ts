import { AppDispatch, RootStore } from 'configureStore';
import { FormikHelpers } from 'formik';
import { connect } from 'react-redux';
import { registerRequest } from 'reducers/LoadingReducer';
import Register from './Register';
import { RegisterInitValues } from './registerIUtils';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onRegister: (
    values: RegisterInitValues,
    formikHelpers: FormikHelpers<RegisterInitValues>,
  ) => dispatch(registerRequest(values, formikHelpers)),
});

export default connect(null, mapDispatchToProps)(Register);
