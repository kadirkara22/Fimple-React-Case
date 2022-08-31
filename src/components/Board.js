import React from 'react'
import Box from './Box'
import "../App.css"

const Board = ({ boxes, onClick }) => {
    return (
        <div className="board">
            {boxes.map((box, index) => (
                <Box key={index} value={box} onClick={() => onClick(index)} />
            ))}
        </div>
    )
}

export default Board
