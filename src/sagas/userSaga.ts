import { all, fork } from 'redux-saga/effects';

function* loginRequest() {}

function* logoutRequest() {}

function* registerRequest() {}

export default function* rootUser() {
  yield all([fork(loginRequest), fork(logoutRequest), fork(registerRequest)]);
}
