import { AppDispatch, RootStore } from 'configureStore';
import { connect } from 'react-redux';
import { loadCartRequest, loadProductsRequest } from 'reducers/LoadingReducer';
import Home from './Home';

const mapStoreToProps = (store: RootStore) => {
  return {
    products: store.products,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => dispatch(loadProductsRequest()),
    loadCart: () => dispatch(loadCartRequest()),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
