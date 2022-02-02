import { loadCart } from 'actions/cartActions';
import { loadProducts } from 'actions/productsAction';
import { AppDispatch, RootStore } from 'configureStore';
import { connect } from 'react-redux';
import Home from './Home';

const mapStoreToProps = (store: RootStore) => {
  return {
    products: store.products,
    loading: store.loading,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    loadProducts: () => loadProducts()(dispatch),
    loadCart: () => loadCart()(dispatch),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Home);
