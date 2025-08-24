// Importa los estilos específicos de este componente
import './App.css'
// Importa el componente TwitterFollowCard
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// Array de usuarios con su información para mostrar en las tarjetas
const users = [
  {
    userName: 'midudev', // nombre de usuario (único)
    name: 'Miguel Ángel Durán', // nombre real
    isFollowing: true // si el usuario está siendo seguido
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

// Componente principal de la aplicación
export function App () {
  return (
    // Sección principal que contiene todas las tarjetas
    <section className='App'>
      {
        // Recorre el array de usuarios y renderiza una tarjeta para cada uno
        users.map(({ userName, name, isFollowing }) => (
          // Se usa la prop 'key' para ayudar a React a identificar cada elemento de la lista de forma única.
          // Es importante porque así React puede actualizar, agregar o eliminar componentes de manera eficiente.
          // La 'key' debe ser única y estable. Aquí usamos 'userName' porque no se repite entre usuarios.
          <TwitterFollowCard
            key={userName} // Identificador único para cada tarjeta
            userName={userName} // Prop para el nombre de usuario
            initialIsFollowing={isFollowing} // Prop para el estado inicial de seguimiento
          >
            {name} {/* El nombre real del usuario se pasa como children */}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
