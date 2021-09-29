import { useDispatch } from "react-redux";
import {
  eraseBoard,
  eraseTurn,
  eraseWinner,
} from "../../state/actions/allActions";

function PlayAgain() {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-secondary btn-lg"
      onClick={() => {
        dispatch(eraseBoard());
        dispatch(eraseWinner());
        dispatch(eraseTurn());
      }}
    >
      Play Again
    </button>
  );
}

export default PlayAgain;
