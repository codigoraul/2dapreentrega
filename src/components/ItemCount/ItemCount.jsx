import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
  const[cantidad, setCantidad] = useState(initial)

  const increment = () => {
    if(cantidad < stock) {
      setCantidad(cantidad+1)
    }
  }

  const decrement = () => {
    if(cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className=""> 
    <h4 className="">El Contador</h4>
      <div className="d-flex flex-row">
          
          <button className="btn btn-secondary" onClick={decrement}> - </button>
          <h4 className="Number  text-center"> {cantidad}</h4>
          <button className="btn btn-secondary" onClick={increment}> + </button>
      </div>
      <div>
        <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={()=>onAdd(cantidad)} disabled={!stock}> 
        Agregar al carrito 
        </button>
      </div>
    </div>
  )
}

export default ItemCount