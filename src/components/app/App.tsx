import "./App.css";
import Board from "../board/Board";
import { useSelector } from "react-redux";
import { BoardType } from "../../state/reducers/allReducers";

function App() {
  const turn = useSelector<BoardType, string>((state) => state.turn);
  return (
    <div>
      <div className="d-flex flex-column align-items-center mt-5">
        <Board />
        <div className="mt-3">
          <h3>Turn: {turn} Player</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
