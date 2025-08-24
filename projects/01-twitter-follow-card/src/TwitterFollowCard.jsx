// Importa el hook useState de React para manejar el estado del componente
import { useState } from 'react'

// Componente funcional que recibe props: children (contenido), userName (nombre de usuario) e initialIsFollowing (estado inicial de seguimiento)
export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  // Estado local para saber si se está siguiendo al usuario o no
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)//esto es un hook que permite añadir estado a un componente funcional

  // Mensaje en consola cada vez que el componente se renderiza
  console.log('[TwitterFollowCard] render with userName: ', userName)

  // Texto del botón según el estado
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  // Clase CSS del botón según el estado
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // Función que se ejecuta al hacer click en el botón para cambiar el estado
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  // Renderizado del componente
  return (
    <article className='tw-followCard'> {/* Contenedor principal */}
      <header className='tw-followCard-header'> {/* Encabezado con avatar e info */}
        <img
          className='tw-followCard-avatar' // Imagen de avatar
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`} // URL dinámica del avatar
        />
        <div className='tw-followCard-info'> {/* Información del usuario */}
          <strong>{children}</strong> {/* Nombre o contenido pasado como children */}
          <span className='tw-followCard-infoUserName'>@{userName}</span> {/* Nombre de usuario */}
        </div>
      </header>

      <aside>
        {/* Botón para seguir/dejar de seguir */}
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span> {/* Texto dinámico */}
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span> {/* Texto adicional */}
        </button>
      </aside>
    </article>
  )
}
