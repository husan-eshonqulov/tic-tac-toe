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
      <>
        <Board />
        <div className="mt-3" style={{ marginBottom: "9em" }}>
          <h3>Turn: {turn} Player</h3>
        </div>
      </>
    );
  } else {
    view = (
      <>
        <ResBoard />
        <div className="mt-3">
          <h3>Winner: {winner}</h3>
        </div>
        <div className="mt-3" style={{ marginBottom: "5em" }}>
          <PlayAgain />
        </div>
      </>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100vh">
      {view}
    </div>
  );
}

export default App;
