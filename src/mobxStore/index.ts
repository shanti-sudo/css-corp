import AuthService from 'services/authService';
import CartStore from './cart';
import ErrorStore from './error';
import LoadingStore from './loading';
import ProductsStore from './products';
import UserStore from './user';

const authService = new AuthService();
export default class RootStore {
  userStore: UserStore;
  loadingStore: LoadingStore;
  cartStore: CartStore;
  productsStore: ProductsStore;
  errorStore: ErrorStore;

  constructor() {
    this.userStore = new UserStore(this, authService);
    this.loadingStore = new LoadingStore(this);
    this.cartStore = new CartStore(this);
    this.productsStore = new ProductsStore(this);
    this.errorStore = new ErrorStore(this);
  }
}
