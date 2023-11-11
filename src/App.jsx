import { useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'

import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
    <div className='container'>
    <main className='conteudo'>
    <Header/>
    <Formulario/>
    </main>
    </div>
      
    </div>
  )
}

export default App
