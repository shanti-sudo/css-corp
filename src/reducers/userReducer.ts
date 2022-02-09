import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from 'constants/actionTypes';
import {
  LoginSuccessType,
  LogoutSuccessType,
  RegisterSuccessType,
} from 'types';
import { User } from 'types/authResponse';

type AuthSuccessActionType = {
  type: LoginSuccessType | RegisterSuccessType;
  user: User;
};

type LogoutSuccessActionType = {
  type: LogoutSuccessType;
  user?: never;
};

export const loginSuccessAction = (user: User): AuthSuccessActionType => ({
  type: LOGIN_SUCCESS,
  user,
});

export const registerSuccessAction = (user: User): AuthSuccessActionType => ({
  type: REGISTER_SUCCESS,
  user,
});

export const logoutSuccessAction = (): LogoutSuccessActionType => ({
  type: LOGOUT_SUCCESS,
});

type AuthSuccessTypes = AuthSuccessActionType | LogoutSuccessActionType;

const initialState = {};

export default (state = initialState, { type, user }: AuthSuccessTypes) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return user as User;

    case LOGOUT_SUCCESS:
      return initialState;

    case REGISTER_SUCCESS:
      return user as User;

    default:
      return state;
  }
};
