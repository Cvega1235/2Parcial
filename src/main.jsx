import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Component_01 from './Component_01.jsx'
import	Component_02 from './Component_02.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Component_01 />
    <Component_02/> 
  </React.StrictMode>,
)
