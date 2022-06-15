import { MutableRefObject } from "react";

export interface SudokuBoardProps {
  controllerRef?: MutableRefObject<SudokuBoardController>;
  board: string[][];
  onBoardChange: (value: string[][]) => void;
}

export interface SudokuBoardController {
  regenerateSolution: () => void;
}
