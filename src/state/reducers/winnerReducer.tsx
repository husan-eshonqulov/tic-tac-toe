function winnerReducer(state = "", action: { type: string; payload: string }) {
  switch (action.type) {
    case "winner/x":
      return "X";

    case "winner/o":
      return "O";

    case "winner/draw":
      return "Draw";

    case "winner/erase":
      return "";

    default:
      return state;
  }
}

export default winnerReducer;
