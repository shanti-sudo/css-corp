import { makeAutoObservable } from 'mobx';
import RootStore from 'mobxStore';

export default class ErrorStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}
