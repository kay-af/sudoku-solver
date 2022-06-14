import React, { CSSProperties } from 'react'
import { SudokuViewProps } from './SudokuViewProps'
import './SudokuView.css'
import { validateCellInput } from '../../utils/Validators'

const constructCell = (props: SudokuViewProps, row: number, column: number) => {

    const mode = props.mode

    const conflictStyle: CSSProperties = {
        color: props.conflicts[row][column] ? 'red' : undefined
    }

    const fixedCellStyle: CSSProperties = {
        fontWeight: mode === 'solved' && props.board[row][column] ? "bold" : undefined,
    }

    return (
        <td key={column + column * row}>
            <input
                style={{ ...fixedCellStyle, ...conflictStyle }}
                disabled={mode === 'solved'}
                onChange={(evt) => 
                    mode === 'edit' &&
                    validateCellInput(evt.currentTarget.value) &&
                    props.onBoardChange!(row, column, evt.currentTarget.value)}
                value={mode === 'edit' ? props.board[row][column] : props.solvedBoard![row][column]} />
        </td>
    )
}

const constructRow = (props: SudokuViewProps, row: number) => {
    return (
        <tr key={row}>
            {props.board[row].map((_, column) => constructCell(props, row, column))}
        </tr>
    )
}

function SudokuView(props: SudokuViewProps) {
    return (
        <table>
            <tbody>
                {props.board.map((_, row) => constructRow(props, row))}
            </tbody>
        </table>
    )
}

export default SudokuView