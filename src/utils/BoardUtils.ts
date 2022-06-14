import { isValidCell } from "./BoardSolver"

const constructEmptyStringBoard = (size: number) => {
    const board = new Array<Array<string>>(size).fill(new Array<string>(size).fill(""))
    return board
}

const constructEmptyConflictsMatrix = (size: number) => {
    const conflicts = new Array<Array<boolean>>(size).fill(new Array<boolean>(size).fill(false))
    return conflicts
}

const toStringBoard = (board: number[][]): string[][] => {
    return board.map<string[]>(row => row.map<string>(data => {
        if (data === 0) return ''
        return data.toString()
    }))
}

const toNumberBoard = (board: string[][]): number[][] => {
    return board.map<number[]>(row => row.map<number>(data => {
        if (data === '') return 0
        return Number.parseInt(data)
    }))
}

const analyzeBoard = (board: string[][]): boolean[][] => {
    
    const numberBoard = toNumberBoard(board)
    const size = board.length
    const conflicts = constructEmptyConflictsMatrix(size)

    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if (numberBoard[i][j] === 0) continue
            if(!isValidCell(numberBoard, i, j)) {
                conflicts[i][j] = true
            }
        }
    }

    return conflicts
}

export { constructEmptyStringBoard, constructEmptyConflictsMatrix, toStringBoard, toNumberBoard, analyzeBoard }