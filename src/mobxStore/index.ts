import Cart from './cart';
import Products from './products';
import User from './user';

export default class RootStore {
  constructor() {
    this.userStore = new User(this);
    this.productsStore = new Products(this);
    this.cartStore = new Cart(this);
  }
}
