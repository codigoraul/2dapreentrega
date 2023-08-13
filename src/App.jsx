import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Navbar from './components/Navbar/Navbar'
import ItemCount from './components/ItemCount/ItemCount'
import Producto from './components/Productos/Producto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
 
  
       <div className=" container contenedor-products d-flex">
        <div className="row">
          <h2 className="text-center mt-5 mb-4">Nuestros productos</h2>
          <p>Agregando aca los productos con fetch</p>
         
        </div>
        
       </div>
        
      </div>
      
    </>
  )
}

export default App
