export type LoadingStateType = {
  id?: number;
  type: string;
  message?: string;
};

export const loadingInitState = [] as LoadingStateType[];

export type LoadingActionType = {
  type: "AUTH_REQUEST";
  id?: never;
  message?: never;
};

const LoadingReducer = (
  state: LoadingStateType[],
  action: LoadingActionType
): LoadingStateType[] => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(action.type);
  if (!matches) return state;
  if (matches[2] === "REQUEST") {
    return [
      ...state,
      { type: matches[1], id: action.id, message: action.message },
    ];
  }
  return state.filter((x) => !(x.type === matches[1] && x.id === action.id));
};

export default LoadingReducer;
