import "./App.css";
import Board from "../board/Board";
import { useSelector } from "react-redux";
import { StateType } from "../../state/reducers/allReducers";
import ResBoard from "../resBoard/ResBoard";
import PlayAgain from "../playAgain/PlayAgain";

function App() {
  const turn = useSelector<StateType, string>((state) => state.turn);
  const winner = useSelector<StateType, string>((state) => state.winner);
  let view;

  if (winner === "") {
    view = (
      <div>
        <Board />
        <div className="mt-3 text-center">
          <h3>Turn: {turn} Player</h3>
        </div>
      </div>
    );
  } else {
    view = (
      <div>
        <ResBoard />
        <div className="mt-3 text-center">
          <h3>Winner: {winner}</h3>
        </div>
        <div className="mt-3 text-center">
          <PlayAgain />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div
        className="d-flex flex-column align-items-center"
        style={{ marginTop: "25vh" }}
      >
        {view}
      </div>
    </div>
  );
}

export default App;
