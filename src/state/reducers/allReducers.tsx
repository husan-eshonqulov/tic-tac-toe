export type BoardType = {
  board: string[][];
  turn: string;
};

const initialBoard: BoardType = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  turn: "X",
};

function allReducers(
  state = initialBoard,
  action: { type: string; payload: [number, number] }
) {
  switch (action.type) {
    case "move/x":
      const stateX = [...state.board];
      const rowX = action.payload[0],
        colX = action.payload[1];
      stateX[rowX][colX] = "X";
      return { board: stateX, turn: "O" };

    case "move/o":
      const stateO = [...state.board];
      const rowO = action.payload[0],
        colO = action.payload[1];
      stateO[rowO][colO] = "O";
      return { board: stateO, turn: "X" };

    default:
      return state;
  }
}

export default allReducers;
