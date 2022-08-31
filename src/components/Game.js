import React, { useState } from 'react'
import Board from './Board'
import DrawResult from './DrawResult'
import WinnerResult from './WinnerResult'

const Game = () => {
    const [box, setBox] = useState([Array(9).fill(null)])
    const [selectNumber, setSelectNumber] = useState(0)
    const [isX, setIsX] = useState(true)
    const xOrO = isX ? "X" : "O"


    const hesaplaWinner = (boxes) => {
        const rows = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < rows.length; i++) {
            const [a, b, c] = rows[i]
            if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
                return boxes[a]
            }

        }
        return null
    }

    const winner = hesaplaWinner(box[selectNumber])

    const handleClick = (i) => {
        const point = box.slice(0, selectNumber + 1)
        const current = point[selectNumber]
        const boxes = [...current]
        console.log(boxes)
        console.log(selectNumber)
        if (winner || boxes[i]) return

        boxes[i] = xOrO

        setBox([...point, boxes])
        setSelectNumber(point.length)
        setIsX(!isX)
    }
    const handleRestart = () => {
        setBox(null)
        setSelectNumber(0)
        setBox([Array(9).fill(null)])
        setIsX(true)
    }
    return (
        <div id="game">
            <Board boxes={box[selectNumber]} onClick={handleClick} />

            <div className="result">
                {winner && (
                    <div className="result-board">
                        <WinnerResult winner={winner} />
                        <button onClick={() => handleRestart()} className="button">Play Again</button>
                    </div>
                )}

                {
                    !winner && selectNumber === 9 && (
                        <div className="result-board">
                            <DrawResult />
                            <button onClick={() => handleRestart()} className="button">Play Again</button>
                        </div>
                    )

                }

            </div>
        </div>

    )
}

export default Game
