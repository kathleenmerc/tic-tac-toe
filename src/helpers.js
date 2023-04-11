// HELPER FUNCTIONS

// Check if the board is filled
export function boardFilled(squares) {

    // Loop through squares array
    for (let i = 0; i < squares.length; i++) {
        let squareFilled = false
        if (squares[i] === "X" || squares[i] === "O") {
            squareFilled = true
        } else {
            // return false if there is any empty square
            return false
        }
    }
    // return true if all squares are filled
    return true
}


// Calculating winning conditions
export function calculateWinner(squares) {

    // Winning lines array [3 Horizontal, 3 Vertical, 2 Diagonal]
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    // Loop through winningLines array and check if squares in each line match
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }

    }

    // If squares don't match, then return null
    return null
}


// TEST FUNCTIONS
const testHorizontal = [
    null, null, null,
    'X', 'X', 'X',
    null, null, null
]

const testVertical = [
    'O', null, null,
    'O', null, null,
    'O', null, null
]

const testDiagonal = [
    'X', null, null,
    null, 'X', null,
    null, null, 'X'
]

// console.log(calculateWinner(testHorizontal))
// console.log(calculateWinner(testVertical))
// console.log(calculateWinner(testDiagonal))
