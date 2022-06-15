export const generateEmptyBoard = (): string[][] =>
  Array(9).fill(Array(9).fill(""));

export const stringifyBoard = (board: number[][]): string[][] => {
  return board.map<string[]>((row) =>
    row.map<string>((data) => {
      if (data === 0) return "";
      return data.toString();
    })
  );
};

export const parseBoard = (board: string[][]): number[][] => {
  return board.map<number[]>((row) =>
    row.map<number>((data) => {
      if (data === "") return 0;
      return Number.parseInt(data);
    })
  );
};

// Generates an array of numbers 1-9 in random order
export const generateShuffledArray = (): number[] => {
  const array = Array(9)
    .fill(0)
    .map((_, i) => i + 1);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const validateParsedBoardCell = (
  board: number[][],
  i: number,
  j: number
): boolean => {
  const size = board.length;

  // Check for row
  for (let x = 0; x < size; x++) {
    if (x === i) continue;
    if (board[x][j] === 0) continue;
    if (board[x][j] === board[i][j]) {
      return false;
    }
  }

  // Check column
  for (let x = 0; x < size; x++) {
    if (x === j) continue;
    if (board[i][x] === 0) continue;
    if (board[i][x] === board[i][j]) {
      return false;
    }
  }

  // Check compartment
  const compI = Math.floor(i / 3) * 3;
  const compJ = Math.floor(j / 3) * 3;

  for (let x = compI; x < compI + 3; x++) {
    for (let y = compJ; y < compJ + 3; y++) {
      if (x === i && y === j) continue;
      if (board[x][y] === 0) continue;
      if (board[x][y] === board[i][j]) {
        return false;
      }
    }
  }

  return true;
};

export const validateParsedBoard = (board: number[][]) => {
  return board.every((row, i) =>
    row.every((_, j) => validateParsedBoardCell(board, i, j))
  );
};
