import React from 'react'

const Board = ({value, onSquareClick}) => {
  return (
    <div>
        <button style ={{
            border : "1px solid black",
            padding:"30px"
        }}onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default Board