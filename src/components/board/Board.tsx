import { BoardType } from "../../state/reducers/allReducers";
import { useDispatch, useSelector } from "react-redux";
import { moveX, moveO } from "../../state/actions/allActions";

let last = "O",
  move;

function Board() {
  const cells = useSelector<BoardType, BoardType>((state) => state);
  const dispatch = useDispatch();
  const rowsLen = cells.length;
  const colsLen = cells[0].length;
  const rows = [];

  for (let row = 0; row < rowsLen; row++) {
    const tr = [];
    for (let col = 0; col < colsLen; col++) {
      tr.push(
        <td
          onClick={() => {
            move = last === "O" ? moveX : moveO;
            dispatch(move(row, col));
            last = last === "O" ? "X" : "O";
          }}
          key={`${row},${col}`}
        >
          {cells[row][col]}
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
