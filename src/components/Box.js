import React from 'react'
import "../App.css"
const Box = ({ value, onClick }) => {

    return (
        <div onClick={onClick} className={value ? `box ${value}` : `box`}>
            {value}
        </div>
    )
}

export default Box
