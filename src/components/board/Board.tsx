import { BoardType } from "../../state/reducers/allReducers";
import { useDispatch } from "react-redux";
import { moveX, moveO } from "../../state/actions/allActions";

function Board({ cells }: { cells: BoardType }) {
  const dispatch = useDispatch();
  const rowsLen = cells.length;
  const colsLen = cells[0].length;
  const rows = [];

  for (let row = 0; row < rowsLen; row++) {
    const tr = [];
    for (let col = 0; col < colsLen; col++) {
      tr.push(
        <td onClick={() => dispatch(moveX(row, col))} key={`${row},${col}`}>
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
