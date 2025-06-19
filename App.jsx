 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Board  from './Components/Board'

export default function App() {
  const[squares,setSquares] = useState(Array(9).fill(null))
  const [xIsNext , setXIsNext]=useState(true);
  function handleClick (i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    
    const newSquares= squares.slice();
    if(xIsNext){
   newSquares[i]="X"
    }else {
       newSquares[i]="O"
    }
    setXIsNext(!xIsNext)
    setSquares(newSquares)
  }
  const winner = calculateWinner(squares)
    let status;
    if(winner){
      status = "Winner " + winner;
    }else {
      status = "Next player: " + (xIsNext? "X":"O")
    }
 return (
 <>
  <div className="winner">{status}</div>
 <div className="container">
 
  <div className="board-row1">
    <Board value={squares[0]} onSquareClick={()=> handleClick(0)}/>
    <Board value={squares[1]} onSquareClick={()=> handleClick(1)}/>
    <Board value={squares[2]} onSquareClick={()=> handleClick(2)}/>
  </div>
   <div className="board-row2">
    <Board  value={squares[3]} onSquareClick={()=> handleClick(3)}/>
    <Board value={squares[4]} onSquareClick={()=> handleClick(4)}/>
    <Board value={squares[5]} onSquareClick={()=> handleClick(5)}/>
  </div>
   <div className="board-row3">
    <Board value={squares[6]} onSquareClick={()=> handleClick(6)}/>
    <Board value={squares[7]} onSquareClick={()=> handleClick(7)}/>
    <Board value={squares[8]} onSquareClick={()=> handleClick(8)}/>
  </div>
 </div>
 
 
 
 
 
 
 
 </>
 )
}
function calculateWinner (squares){
  const lines =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,5,8],
    [2,5,6]
  ]
  for(let i=0; i<lines.length; i++){
    const [a,b,c]=lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      return squares[a]
    }
  }
}