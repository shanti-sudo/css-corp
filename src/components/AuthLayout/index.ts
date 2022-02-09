import { RootStore } from 'configureStore';
import { connect } from 'react-redux';
import { RootState } from 'reducers/actionTypes';
import AuthLayout from './AuthLayout';

const mapStateToProps = (state: RootStore) => ({
  IsUserExist: 'id' in state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);
