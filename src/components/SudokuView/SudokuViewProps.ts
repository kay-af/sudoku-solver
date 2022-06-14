export interface SudokuViewProps {
    mode: 'edit' | 'solved'
    board: string[][]
    solvedBoard?: string[][]
    onBoardChange: (i: number, j: number, value: string) => void
    conflicts: boolean[][]
}