import { id } from 'date-fns/locale';
import { makeAutoObservable } from 'mobx';
import RootStore from 'mobxStore';

export default class LoadingStore {
  private rootStore: RootStore;

  private loading = [];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addLoading() {}

  removeLoading() {}

  isLoading(type) {
    return true;
  }
}
