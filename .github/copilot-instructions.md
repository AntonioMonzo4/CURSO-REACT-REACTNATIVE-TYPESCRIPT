# Copilot Coding Agent Instructions for CURSO-REACT-UDEMY-

## Arquitectura General
- El workspace contiene varios proyectos React + Vite, cada uno en su propia carpeta (`Curso React`, `PLANTILLA INICIAL`, `01_guitarla/01_guitarla`).
- Cada proyecto tiene su propio `src/`, `public/`, y archivos de configuración (`package.json`, `vite.config.js`).
- Los datos de ejemplo suelen estar en `src/data/` (ejemplo: `db.js` en `01_guitarla`).
- Las imágenes y assets están en `public/img/`.

## Flujo de desarrollo
- Para iniciar un proyecto, usa `npm install` y luego `npm run dev` en la carpeta raíz del proyecto deseado.
- El build se realiza con `npm run build`.
- No hay configuración de testing automatizado detectada; los flujos de testeo son manuales.
- ESLint está presente en algunos proyectos (`eslint.config.js`), pero no hay reglas personalizadas relevantes en los README.

## Convenciones y patrones
- Los componentes React se ubican en `src/components/` y suelen ser funcionales.
- Los datos se importan desde archivos JS en `src/data/` y se pasan como props a los componentes.
- Las imágenes se referencian por nombre (ejemplo: `image: 'guitarra_01'` en los datos) y se buscan en `public/img/`.
- No hay uso de TypeScript ni de rutas avanzadas (React Router) en los ejemplos actuales.
- Los estilos se gestionan con archivos CSS simples en `src/`.

## Integraciones y dependencias
- Vite es el bundler principal; los plugins recomendados son `@vitejs/plugin-react` y `@vitejs/plugin-react-swc`.
- No hay dependencias externas relevantes fuera de React y Vite.

## Ejemplo de patrón de datos
```js
// src/data/db.js
export const db = [
  { id: 1, name: 'Lukather', image: 'guitarra_01', ... },
  // ...
]
```

## Repositorios anidados
- Evita agregar carpetas que contengan su propio `.git` dentro de otro repo. Si ocurre, elimina el `.git` interno y usa `git rm --cached -r <carpeta>`.

## Archivos clave
- `src/App.jsx`, `src/main.jsx`: punto de entrada de cada app.
- `src/components/`: componentes reutilizables.
- `src/data/`: datos estáticos.
- `public/img/`: imágenes usadas en la UI.

## Ejemplo de flujo de trabajo
```powershell
cd "Curso React"
npm install
npm run dev
```

## Notas
- No hay reglas de agentes previas ni instrucciones Copilot específicas en el workspace.
- Si agregas nuevas convenciones, documenta en este archivo.
