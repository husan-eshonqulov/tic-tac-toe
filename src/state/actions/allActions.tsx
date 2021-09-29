export function moveX(rowI: number, colI: number) {
  return {
    type: "move/x",
    payload: [rowI, colI],
  };
}

export function moveO(rowI: number, colI: number) {
  return {
    type: "move/o",
    payload: [rowI, colI],
  };
}

export function eraseBoard() {
  return {
    type: "board/erase",
  };
}

export function turnO() {
  return {
    type: "turn/o",
  };
}

export function turnX() {
  return {
    type: "turn/x",
  };
}

export function eraseTurn() {
  return {
    type: "turn/erase",
  };
}

export function winnerX() {
  return {
    type: "winner/x",
  };
}

export function winnerO() {
  return {
    type: "winner/o",
  };
}

export function winnerDraw() {
  return {
    type: "winner/draw",
  };
}

export function eraseWinner() {
  return {
    type: "winner/erase",
  };
}
