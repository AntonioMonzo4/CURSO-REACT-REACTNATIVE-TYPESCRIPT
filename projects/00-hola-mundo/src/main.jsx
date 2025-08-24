import { React } from 'react'
import { ReactDOM } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = (text) => {
  return (<button>{text}</button>);
};

root.render(


<React.Fragment>
  <Button text="Hola Mundo" />
  <Button text="Hola Mundo 2" />
  <Button text="Hola Mundo 3" />

</React.Fragment>
);