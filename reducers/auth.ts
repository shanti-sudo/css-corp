export type AuthStateType = {
  accessToken?: string;
  user?: User;
};

export const AuthInitState: AuthStateType = {};

export type AuthAction = { type: "AUTH_SUCCESS"; payload: AuthStateType };

const AuthReducer = (state: AuthStateType, action: AuthAction) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return action.payload;

    default:
      return state;
  }
};

export default AuthReducer;
