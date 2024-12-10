import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/button";
import { Header } from "components/header";
import { Main } from "components/main";
import { SolverSection } from "components/solver-section";
import { SudokuBoard } from "components/sudoku-board/sudoku-board";
import { SudokuBoardController } from "components/sudoku-board/sudoku-board.types";
import React, { useCallback, useRef } from "react";
import { useState } from "react";
import { generateEmptyBoard } from "utils/board-utils";
import styles from "./solver.module.css";

export const Solver = () => {
  const [board, setBoard] = useState<string[][]>(generateEmptyBoard());
  const sudokuControllerRef = useRef<SudokuBoardController>({
    regenerateSolution: () => {},
  });

  const onClickRegenerate = useCallback(() => {
    sudokuControllerRef.current.regenerateSolution();
  }, []);

  return (
    <Main>
      <Header />
      <SolverSection>
        <SudokuBoard
          controllerRef={sudokuControllerRef}
          board={board}
          onBoardChange={setBoard}
        />
        <div className={styles.solutionButtonContainer}>
          <Button
            onClick={onClickRegenerate}
            icon={<FontAwesomeIcon icon={faRepeat} />}
          >
            Regenerate Solution
          </Button>
        </div>
      </SolverSection>
    </Main>
  );
};
