export type ErrorStateType = {
  type: string;
  error: Error;
  id?: number;
  message?: string;
};

export const loadingInitState = [] as ErrorStateType[];

export type ErrorActionType = {
  type: "AUTH_FAIL";
  error: Error;
  id?: never;
  message?: never;
};

const ErrorReducer = (
  state: ErrorStateType[],
  action: ErrorActionType
): ErrorStateType[] => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(action.type);
  if (!matches) return state;
  if (matches[2] === "FAIL") {
    return [
      ...state,
      {
        type: matches[1],
        error: action.error,
        id: action.id,
        message: action.message,
      },
    ];
  }
  return state.filter((x) => !(x.type === matches[1] && x.id === action.id));
};

export default ErrorReducer;
