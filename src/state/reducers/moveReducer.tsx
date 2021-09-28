export type BoardType = [string, string, string][];

const initialBoard: BoardType = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function moveReducer(
  state = initialBoard,
  action: { type: string; payload: [number, number] }
) {
  switch (action.type) {
    case "move/x":
      const stateX = [...state];
      const rowX = action.payload[0],
        colX = action.payload[1];
      stateX[rowX][colX] = "X";
      return stateX;

    case "move/o":
      const stateO = [...state];
      const rowO = action.payload[0],
        colO = action.payload[1];
      stateO[rowO][colO] = "O";
      return stateO;

    default:
      return state;
  }
}

export default moveReducer;
