import {
  generateShuffledArray,
  parseBoard,
  stringifyBoard,
  validateParsedBoard,
  validateParsedBoardCell,
} from "./board-utils";

const solveBoardRecursively = (
  board: number[][],
  i: number,
  j: number
): string[][] | undefined => {
  const size = board.length;

  if (i >= size) {
    return stringifyBoard(board);
  } else {
    let nextColumn = j + 1;
    let nextRow = i;
    if (nextColumn >= size) {
      nextColumn = 0;
      nextRow = i + 1;
    }

    if (board[i][j] !== 0) {
      return solveBoardRecursively(board, nextRow, nextColumn);
    } else {
      // Check the next number in random order to get random solutions
      const selections = generateShuffledArray();
      for (let choice of selections) {
        board[i][j] = choice;
        if (validateParsedBoardCell(board, i, j)) {
          const result = solveBoardRecursively(board, nextRow, nextColumn);
          if (result) return result;
        }
        board[i][j] = 0;
      }
      return undefined;
    }
  }
};

export const solveBoard = (board: string[][]): string[][] | undefined => {
  const parsedBoard = parseBoard(board);
  if (!validateParsedBoard(parsedBoard)) return;
  return solveBoardRecursively(parsedBoard, 0, 0);
};
