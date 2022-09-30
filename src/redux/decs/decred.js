const decred = (state = { num: 0 }, action) => {
  switch (action.type) {
    case "DEC":
      return {
        ...state,
        num: state.num - action.num,
      };

    default:
      return state;
  }
};
export default decred;
