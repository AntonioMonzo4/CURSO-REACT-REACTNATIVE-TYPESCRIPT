import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  x: 'x',
  O: 'o',
}

const Square = ({children, isSelected, updateBoard, index }) =>{
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard()
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))/*Estado inicial*/
  
  const [turn, setTurn] = useState(TURNS.x)

  const updateBoard = () =>{
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
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
