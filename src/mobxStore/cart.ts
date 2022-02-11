import { makeAutoObservable } from 'mobx';
import RootStore from 'mobxStore';

export default class CartStore {
  rootStore: RootStore;

  cart = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}