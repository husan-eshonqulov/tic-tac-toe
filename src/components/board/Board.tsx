import { BoardType } from "../../state/reducers/allReducers";
import { useDispatch, useSelector } from "react-redux";
import { moveX, moveO } from "../../state/actions/allActions";

function Board() {
  const board = useSelector<BoardType, string[][]>((state) => state.board);
  const turn = useSelector<BoardType, string>((state) => state.turn);
  const dispatch = useDispatch();
  const rowsLen = board.length;
  const colsLen = board[0].length;
  const rows = [];
  const move = turn === "X" ? moveX : moveO;

  for (let row = 0; row < rowsLen; row++) {
    const tr = [];
    for (let col = 0; col < colsLen; col++) {
      tr.push(
        <td
          onClick={() => {
            if (board[row][col] === "") dispatch(move(row, col));
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
