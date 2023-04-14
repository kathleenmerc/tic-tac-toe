import Board from "./Board"
import { useState, useEffect } from "react"
import { calculateWinner, boardFilled } from "../helpers"
import { Typography, Button } from "@mui/material"
import ReplayIcon from '@mui/icons-material/Replay';

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const [fullBoard, setFullBoard] = useState(false)
    const [tie, setTie] = useState(false)
    const boardStatus = boardFilled(board)
    const winner = calculateWinner(board)

    useEffect(() => {
        setFullBoard(boardStatus)
        if (fullBoard) {
            setTie(true)
            return
        }
    })

    function handleGame(i) {

        const boardCopy = [...board]
        setBoard(boardCopy)

        // If the user clicks on an occupied square or if there is a winner, then return
        if (boardCopy[i] || winner) {
            return
        }

        setXisNext(!xIsNext)
        boardCopy[i] = xIsNext ? "X" : "O"
    }

    function restart() {
        setFullBoard(false)
        setTie(false)
        setBoard(Array(9).fill(null))
    }

    return (
        <div className="game">
            <Board squares={board} onClick={handleGame} />

            <Typography variant="subtitle1" sx={{ m: 2 }}>

                {tie ? ("It's a tie!")
                    :
                    (winner ? winner + " wins!" : "Next Player: " + (xIsNext ? "X" : "O"))
                }

            </Typography>

            <Button variant="contained" endIcon={<ReplayIcon />} color="info" onClick={restart}>Restart</Button>
        </div>
    )
}






/*
NOTES

// Destructuring useState:

Without destructuring:
const board = useState("state")
board[0] 
board[1]

Better to use names:
const [board, setBoard] = useState("state")

*/