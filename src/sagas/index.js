import { all, fork } from 'redux-saga/effects';
import rootCart from './cartSaga.ts';
import rootProducts from './productsSaga.ts';

export default function* root() {
  yield all([fork(rootProducts), fork(rootCart)]);
}
