function turnReducer(state = "X", action: { type: string }) {
  switch (action.type) {
    case "turn/o":
      return "O";

    case "turn/x":
      return "X";

    case "turn/erase":
      return "X";

    default:
      return state;
  }
}

export default turnReducer;
