type SudokuBoardMode = "edit" | "solved";

export interface SudokuBoardProps {
  board: string[][];
  onBoardChange: (value: string[][]) => void;
}
