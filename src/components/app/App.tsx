import "./App.css";
import Board from "../board/Board";
import { useSelector } from "react-redux";
import { StateType } from "../../state/reducers/allReducers";

function App() {
  const turn = useSelector<StateType, string>((state) => state.turn);
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100vh">
      <Board />
      <div className="mt-3" style={{ marginBottom: "10em" }}>
        <h3>Turn: {turn} Player</h3>
      </div>
    </div>
  );
}

export default App;
