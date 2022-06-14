import React, { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { solveBoard } from "utils/board-solver";
import styles from "./sudoku-board.module.css";
import { SudokuBoardProps } from "./sudoku-board.types";

export const SudokuBoard = (props: SudokuBoardProps) => {
  const { board, onBoardChange } = props;
  const boardSize = useMemo(() => board.length, [board.length]);
  const [solution, setSolution] = useState<string[][] | undefined>(
    solveBoard(board)
  );

  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>, i: number, j: number) => {
      const validationRegex = /^[1-9]{0,1}$/;
      if (!validationRegex.test(evt.target.value)) return evt.preventDefault();
      const updatedBoard = board.map((row) => [...row]);
      updatedBoard[i][j] = evt.target.value;
      onBoardChange(updatedBoard);
      setSolution(solveBoard(updatedBoard));
    },
    [board, onBoardChange]
  );

  return (
    <table className={styles.board}>
      <tbody>
        {props.board.map((row, i) => {
          return (
            <tr className={styles.row} key={i}>
              {row.map((value, j) => {
                const onChange = (evt: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(evt, i, j);
                return (
                  <td className={styles.cell} key={i * boardSize + j}>
                    {solution && (
                      <div className={styles.solvedCell}>{solution[i][j]}</div>
                    )}
                    <input
                      className={styles.input}
                      inputMode="numeric"
                      type="number"
                      value={value}
                      onChange={onChange}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
