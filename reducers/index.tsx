import AuthReducer, { AuthAction, AuthStateType } from "./auth";
import ErrorReducer, { ErrorActionType, ErrorStateType } from "./error";
import LoadingReducer, { LoadingActionType, LoadingStateType } from "./loading";

export type RootStateType = {
  error: ErrorStateType[];
  loading: LoadingStateType[];
  auth: AuthStateType;
};

export const RootInitState: RootStateType = {
  error: [],
  loading: [],
  auth: {},
};

type RootAction = LoadingActionType | ErrorActionType | AuthAction;

const rootReducer = (state: RootStateType, action: RootAction) => {
  return {
    error: ErrorReducer(state.error, action as ErrorActionType),
    loading: LoadingReducer(state.loading, action as LoadingActionType),
    auth: AuthReducer(state.auth, action as AuthAction),
  };
};

export default rootReducer;
