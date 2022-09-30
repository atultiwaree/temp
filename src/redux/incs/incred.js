const incred = (state = { num: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        num: state.num + action.num,
      };
    default:
      return state;
  }
};
export default incred;
