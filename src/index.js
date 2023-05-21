import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> 
  , // componente que va a renderizar
  document.getElementById('root')  // en donde se va a renderizar
)
