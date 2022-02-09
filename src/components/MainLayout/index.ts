import { AppDispatch, RootStore } from 'configureStore';
import { connect } from 'react-redux';
import { logoutRequest } from 'reducers/LoadingReducer';
import MainLayout from './MainLayout';

const mapStateToProps = (state: RootStore) => ({
  quantity: state.cart.reduce((p, c) => p + c.quantity, 0),
  error: state.error,
  IsUserExist: 'id' in state.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearError: (key: string) => dispatch({ type: 'CLEAR_ERROR', key }),
  onLogout: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
