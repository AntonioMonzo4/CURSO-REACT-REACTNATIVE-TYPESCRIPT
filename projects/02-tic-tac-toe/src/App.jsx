import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'X',
  O: 'O',
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))/*Estado inicial*/

  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)//ESTADO DE GANADOR null no ganador y false empata


  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const updateBoard = (index) => {

    //COMPROBAR POSICIONES
    if (board[index] || winner) return/*Si ya hay algo en esa posición, no hacer nada*/

    //ACTUALIZAR TABLERO
    const newBoard = [...board]//todo dentro de un nuevo array 
    newBoard[index] = turn//asignar el turno actual al nuevo tablero
    setBoard(newBoard)//actualizar el estado del tablero

    //ACTUALIZAR TURNO
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X//asignar el nuevo turno
    setTurn(newTurn)//actualizar el estado del turno

    //COMPROBAR GANADOR
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      //OPCIÓN 1
      setWinner((prevWinner) => {//No utilizado
        return newWinner
      })

      //OPCIÓN 2 
      //setWinner(newWinner) //esto es asíncrono esto se debe a que React agrupa las actualizaciones de estado es decir, que puede que no se actualice inmediatamente
    //Las actualizaciones de estado en React son asíncronas, lo que significa que el nuevo estado puede no estar disponible inmediatamente después de llamar a setState.
    }

    }

  


  return (


    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        return (
        <Square
          key={index}/**Pq es único sino no funcionaría */
          index={index}
          updateBoard={updateBoard}
        >
          {index}
        </Square>
        )
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{/**Cuando este seleccionado cambia el componente hijo */}
          {TURNS.x}{/**Componente hijo */}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

    </main>
  )
}

export default App
