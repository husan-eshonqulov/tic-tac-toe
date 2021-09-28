import { combineReducers } from "redux";
import moveReducer from "./moveReducer";
import winnerReducer from "./winnerReducer";
import turnReducer from "./turnReducer";
import { BoardType } from "./moveReducer";

export type StateType = {
  board: BoardType;
  turn: string;
  winner: string;
};

const allReducers = combineReducers({
  board: moveReducer,
  turn: turnReducer,
  winner: winnerReducer,
});

export default allReducers;
