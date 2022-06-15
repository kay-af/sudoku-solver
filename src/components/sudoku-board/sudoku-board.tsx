import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useCallback, useEffect } from "react";
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

  useEffect(() => {
    if (props.controllerRef) {
      props.controllerRef.current = {
        regenerateSolution: () => setSolution(solveBoard(board)),
      };
    }
  }, [board, props.controllerRef]);

  const handleChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>, i: number, j: number) => {
      const validationRegex = /^[1-9]{0,1}$/;
      if (!validationRegex.test(evt.target.value)) return evt.preventDefault();
      const updatedBoard = board.map((row) => [...row]);
      updatedBoard[i][j] = evt.target.value;
      setSolution(solveBoard(updatedBoard));
      onBoardChange(updatedBoard);
    },
    [board, onBoardChange]
  );

  const validBoard = useMemo(() => Boolean(solution), [solution]);

  return (
    <Fragment>
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
                        <div className={styles.solvedCell}>
                          {solution[i][j]}
                        </div>
                      )}
                      <input
                        className={[
                          styles.input,
                          !validBoard && styles.errorInput,
                        ].join(" ")}
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
      {!validBoard && (
        <p className={styles.errorText}>
          <span className={styles.errorIcon}>
            <FontAwesomeIcon icon={faWarning} />
          </span>
          Board configuration is not valid!
        </p>
      )}
    </Fragment>
  );
};
