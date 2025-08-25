import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  x: 'x',
  O: 'o',
}

const Square = ({children, updateBoard, index }) =>{
  return (
    <div className="square">
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))/*Estado inicial*/ 


  return (


    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <section className='game'>
        return (
          <Square
          key={index}/**Pq es único sino no funcionaría */
          index={index}
          >
            {index}
          </Square>
        )
      </section>

    </main>
    )

}
export default App
