import { Footer } from "components/footer";
import { Header } from "components/header";
import { Main } from "components/main";
import { SolverSection } from "components/solver-section";
import { SudokuBoard } from "components/sudoku-board/sudoku-board";
import React from "react";
import { useState } from "react";

export const Solver = () => {
  const [board, setBoard] = useState<string[][]>(
    Array(9).fill(Array(9).fill(""))
  );

  return (
    <Main>
      <Header />
      <SolverSection>
        <SudokuBoard board={board} onBoardChange={setBoard} />
      </SolverSection>
      <Footer />
    </Main>
  );
};
