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
