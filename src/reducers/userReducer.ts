import { LoginActions, LogoutActions, RegisterActions } from 'types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LoginActions.LOGIN_SUCCESS:
      return state;

    case LogoutActions.LOGOUT_SUCCESS:
      return state;

    case RegisterActions.REGISTER_SUCCESS:
      return state;

    default:
      return state;
  }
};
