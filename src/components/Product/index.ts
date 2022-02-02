import { addCart, deleteCartItem, updateCartItem } from 'actions/cartActions';
import { AppDispatch, RootStore } from 'configureStore';
import { connect } from 'react-redux';
import { CartResponse } from 'types/CartResponse';
import { ProductResponse } from 'types/ProductResponse';
import Product from './Product';

const mapStoreToProps = (store: RootStore, props: ProductResponse) => {
  return {
    cartItem: store.cart.find((x) => x.productId === props.id),
    addLoading: store.loading[`ADD_CART_${props.id}`],
    updateLoading: store.loading[`UPDATE_CART_${props.id}`],
    deleteLoading: store.loading[`DELETE_CART_${props.id}`],
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addCart: (productId: number) => addCart(productId)(dispatch),
    updateCartItem: (cartItem: CartResponse) =>
      updateCartItem(cartItem)(dispatch),
    deleteCartItem: (cartItem: CartResponse) =>
      deleteCartItem(cartItem)(dispatch),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Product);
