import Formulario from './components/Formulario'
import Header from './components/Header'

import './global.css'

function App() {



  return (
    <div className='body'>
    <div className='container'>
    <Header/>
    <div className='barra'></div>
    <div className="calculadora">
    <Formulario/>
    </div>
    </div>
      
    </div>
  )
}

export default App
