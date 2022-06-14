import { toNumberBoard, toStringBoard } from "./BoardUtils"

const isValidChoice = (board: number[][], i: number, j: number) => {

    const size = board.length

    // Check for row
    for (let x = 0; x < size; x++) {
        if (x === i) continue
        if (board[x][j] === 0) continue
        if (board[x][j] === board[i][j]) {
            return false
        }
    }

    // Check column
    for (let x = 0; x < size; x++) {
        if (x === j) continue
        if (board[i][x] === 0) continue
        if (board[i][x] === board[i][j]) {
            return false
        }
    }

    // Check compartment
    const compI = Math.floor(i / 3) * 3
    const compJ = Math.floor(j / 3) * 3

    for (let x = compI; x < compI + 3; x++) {
        for (let y = compJ; y < compJ + 3; y++) {
            if (x === i && y === j) continue
            if (board[x][y] === 0) continue
            if (board[x][y] === board[i][j]) {
                return false
            }
        }
    }

    return true
}

const shuffledArray1to9 = (): number[] => {
    const array = [1,2,3,4,5,6,7,8,9]
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const solveRecursive = (board: number[][], i: number, j: number): string[][] | undefined => {

    const size = board.length

    if (i >= size) {
        return toStringBoard(board)
    } else {
        let nextJ = j + 1
        let nextI = i
        if (nextJ >= size) {
            nextJ = 0
            nextI = i + 1
        }

        if (board[i][j] !== 0) {
            return solveRecursive(board, nextI, nextJ)
        } else {
            const arr = shuffledArray1to9()
            for (let choice of arr) {
                board[i][j] = choice
                if (isValidChoice(board, i, j)) {
                    const result = solveRecursive(board, nextI, nextJ)
                    if (result) return result
                }
                board[i][j] = 0
            }
            return undefined
        }
    }
}

const solveBoard = (board: string[][]): string[][] | undefined => {
    return solveRecursive(toNumberBoard(board), 0, 0)
}

export { solveBoard, isValidChoice as isValidCell }