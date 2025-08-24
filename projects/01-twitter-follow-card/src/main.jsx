// Importa la librería principal de React
import React from 'react'
// Importa el módulo para renderizar React en el DOM
import ReactDOM from 'react-dom/client'
// Importa el componente principal de la aplicación
import { App } from './App.jsx'
// Importa los estilos globales de la aplicación
import './index.css'

// Crea la raíz de la aplicación React en el elemento con id 'root' del HTML
const root = ReactDOM.createRoot(document.getElementById('root'))

// Renderiza el componente App dentro de la raíz creada
root.render(
  <App />
)
