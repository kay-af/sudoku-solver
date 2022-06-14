import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import { solveBoard } from '../../utils/BoardSolver'
import { analyzeBoard, constructEmptyConflictsMatrix, constructEmptyStringBoard } from '../../utils/BoardUtils'
import AppHeader from '../AppHeader/AppHeader'
import SudokuView from '../SudokuView/SudokuView'
import { AppHomeProps } from './AppHomeProps'
import './AppHome.css'

function AppHome(props: AppHomeProps) {

    const { width, height } = useWindowSize()

    const [mode, setMode] = useState<'edit' | 'solved'>('edit')
    const [board, setBoard] = useState(constructEmptyStringBoard(props.boardSize))
    const [solvedBoard, setSolvedBoard] = useState<string[][]>()
    const [conflicts, setConflicts] = useState<boolean[][]>(constructEmptyConflictsMatrix(props.boardSize))

    return (
        <div style={{
            width: width,
            height: height
        }} className="HomeContainer">
            <AppHeader />
            <div className="MainRegion">
                <div className="SudokuContainer">
                    <SudokuView
                        mode={mode}
                        conflicts={conflicts}
                        board={board}
                        solvedBoard={solvedBoard}
                        onBoardChange={(row, column, value) => {
                            setBoard((board) => {
                                const updatedBoard = []
                                for (let row of board) {
                                    updatedBoard.push([...row])
                                }
                                updatedBoard[row][column] = value
                                setConflicts(analyzeBoard(updatedBoard))
                                return updatedBoard
                            })
                        }} />
                </div>

            </div>

            <div className="ButtonBar">
                <button
                    disabled={conflicts.some((row) => row.some((value) => value))}
                    onClick={() => {
                        const solution = solveBoard(board)
                        if (solution) {
                            setMode('solved')
                            setSolvedBoard(solution)
                        }
                    }}>Generate Solution</button>

                <button onClick={() => {
                    setMode('edit')
                    setBoard(constructEmptyStringBoard(props.boardSize))
                }}>
                    Reset Board
                </button>
            </div>
        </div>
    )
}

export default AppHome
