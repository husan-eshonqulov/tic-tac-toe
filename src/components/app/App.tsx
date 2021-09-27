import "./App.css";
import { useSelector } from "react-redux";
import Board from "../board/Board";
import { BoardType } from "../../state/reducers/allReducers";

function App() {
  const cells = useSelector<BoardType, BoardType>((state) => state);
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Board cells={cells} />
      </div>
    </div>
  );
}

export default App;
