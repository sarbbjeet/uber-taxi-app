const api =
  ({ dispatch, state }) =>
  (next) =>
  async (action) => {
    if (typeof action === "function") return action(dispatch, state);
    next(action);
  };

export default api;
