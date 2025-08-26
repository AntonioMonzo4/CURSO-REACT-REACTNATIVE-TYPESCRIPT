import { useState } from 'react'
import confetti from 'canvas-confetti'


import { Square } from './components/Square.jsx'
import {TURNS,} from './constants.js'
import {checkWinnerFrom} from './logic/board.js'

import './App.css'


function App() {

  const [board, setBoard] = useState(Array(9).fill(null))/*Estado inicial*/

  const [turn, setTurn] = useState(TURNS.x)
  const [winner, setWinner] = useState(null)//ESTADO DE GANADOR null no ganador y false empata

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)  // Si todas las casillas están ocupadas
  }

 

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

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
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      //OPCIÓN 1
      //setWinner((prevWinner) => {//No utilizado
      //return newWinner
      //})

      //OPCIÓN 2 
      confetti()//librería para lanzar confetti
      setWinner(newWinner) //esto es asíncrono esto se debe a que React agrupa las actualizaciones de estado es decir, que puede que no se actualice inmediatamente
      //Las actualizaciones de estado en React son asíncronas, lo que significa que el nuevo estado puede no estar disponible inmediatamente después de llamar a setState.



    } else if (checkEndGame(newBoard)) {
      setWinner(false)/*Empate*/
    }

  }




  return (



    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar</button>

      {/**
        Las siguientes líneas (110 a 123) recorren el array 'board' y renderizan un componente <Square> para cada posición del tablero:
        - board.map((square, index) => {...}): recorre cada casilla del tablero, donde 'square' es el valor actual (X, O o null) y 'index' es la posición.
        - <Square key={index} ...>: se usa 'key' para que React identifique cada componente de la lista de forma única y eficiente. Es obligatorio cuando se renderizan listas.
        - index={index}: se pasa la posición al componente Square para saber cuál casilla se está renderizando.
        - updateBoard={updateBoard}: función que se ejecuta al hacer clic en la casilla para actualizar el tablero.
        - {square}: el valor que se muestra en la casilla (X, O o vacío).
        Así, se genera el tablero visualmente y se mantiene sincronizado con el estado del juego.
      */}
      <section className='game'>

        {board.map((square, index) => {
          return (
            <Square
              key={index}/**Pq es único sino no funcionaría */
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })}
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{/**Cuando este seleccionado cambia el componente hijo */}
          {TURNS.x}{/**Componente hijo */}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>


      {/**SECCIÓN CON RENDERIZADO CONDICIONAL */}
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false ? "Empate" : `Ganador: ${winner}`
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Reiniciar</button>
              </footer>
            </div>
          </section>
        )

      }

    </main>
  )
}

export default App
