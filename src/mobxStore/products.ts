import { makeAutoObservable } from 'mobx';
import RootStore from 'mobxStore';

export default class ProductsStore {
  rootStore: RootStore;

  products = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}
