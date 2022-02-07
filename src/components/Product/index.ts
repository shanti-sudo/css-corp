import { addCart, deleteCartItem, updateCartItem } from 'actions/cartActions';
import { AppDispatch, RootStore } from 'configureStore';
import { connect } from 'react-redux';
import {
  addCartItemRequest,
  deleteCartItemRequest,
  updateCartItemRequest,
} from 'reducers/actionTypes';
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
    addCart: (productId: number) => dispatch(addCartItemRequest(productId)),
    updateCartItem: (cartItem: CartResponse) =>
      dispatch(updateCartItemRequest(cartItem)),
    deleteCartItem: (cartItem: CartResponse) =>
      dispatch(deleteCartItemRequest(cartItem)),
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Product);
