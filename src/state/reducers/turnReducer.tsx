function turnReducer(state = "X", action: { type: string }) {
  switch (action.type) {
    case "turn/o":
      return "O";

    case "turn/x":
      return "X";

    default:
      return state;
  }
}

export default turnReducer;
