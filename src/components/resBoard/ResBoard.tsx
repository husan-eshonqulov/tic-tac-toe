import { useSelector } from "react-redux";
import { StateType } from "../../state/reducers/allReducers";
import { BoardType } from "../../state/reducers/moveReducer";

function ResBoard() {
  const board = useSelector<StateType, BoardType>((state) => state.board);
  const rowLen = board.length;
  const colLen = board[0].length;
  const rows = [];

  for (let row = 0; row < rowLen; row++) {
    const tr = [];
    for (let col = 0; col < colLen; col++) {
      tr.push(<td style={{ cursor: "default" }}>{board[row][col]}</td>);
    }
    rows.push(<tr>{tr}</tr>);
  }

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default ResBoard;
