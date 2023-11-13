import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'

import './global.css'
import Resultado from './components/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
    <div className='container'>
    <Header/>
    <div className='barra'></div>
    <div className="calculadora">
    <Formulario/>
    <Resultado/>
    </div>
    </div>
      
    </div>
  )
}

export default App
