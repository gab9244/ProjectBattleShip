import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  './componentes/AiBoard.css'

import './componentes/Home.css'
import { Home } from './componentes/Home'

import './componentes/Placing.css'
import { Placing } from './componentes/Placing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <Placing />
  </React.StrictMode>,
)
