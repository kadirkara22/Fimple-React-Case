import React from 'react'

const WinnerResult = ({ winner }) => {
    return (
        <div>
            <span className={winner}>{winner} kazandı. Tebrikler !!!</span>
        </div>
    )
}

export default WinnerResult
