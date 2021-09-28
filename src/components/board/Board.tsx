import { BoardType } from "../../state/reducers/moveReducer";
import { StateType } from "../../state/reducers/allReducers";
import { useDispatch, useSelector } from "react-redux";
import {
  moveX,
  moveO,
  turnO,
  turnX,
  winnerX,
  winnerO,
  winnerDraw,
} from "../../state/actions/allActions";
import { detWinner } from "../../function";

function Board() {
  const board = useSelector<StateType, BoardType>((state) => state.board);
  const turn = useSelector<StateType, string>((state) => state.turn);
  const dispatch = useDispatch();
  const rowsLen = board.length;
  const colsLen = board[0].length;
  const rows = [];
  const move = turn === "X" ? moveX : moveO;
  const turnF = turn === "X" ? turnO : turnX;
  const winner = detWinner(board);
  let getWinner = () => {
    return {
      type: "Pending",
    };
  };

  if (winner === "X") getWinner = winnerX;
  if (winner === "O") getWinner = winnerO;
  if (winner === "Draw") getWinner = winnerDraw;

  for (let row = 0; row < rowsLen; row++) {
    const tr = [];
    for (let col = 0; col < colsLen; col++) {
      tr.push(
        <td
          onClick={() => {
            if (board[row][col] === "") {
              dispatch(move(row, col));
              dispatch(getWinner());
              dispatch(turnF());
            }
          }}
          key={`${row},${col}`}
        >
          {board[row][col]}
        </td>
      );
    }
    rows.push(<tr key={row}>{tr}</tr>);
  }

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Board;
