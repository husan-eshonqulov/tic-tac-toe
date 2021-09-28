function winnerReducer(state = "", action: { type: string; payload: string }) {
  switch (action.type) {
    case "winner/x":
      return "X";

    case "winner/o":
      return "O";

    default:
      return state;
  }
}

export default winnerReducer;
