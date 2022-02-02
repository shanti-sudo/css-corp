export default ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    try {
      const matches = /(.*)_(FAIL)/.exec(action.type);
      if (matches) {
        // make api call
        console.log(action);

        next(action);
      } else {
        next(action);
      }
    } catch (error) {
      next(action);
    }
  };
