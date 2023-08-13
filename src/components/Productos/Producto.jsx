import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
function Producto() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching productos:', error));
  }, []);

  return (
    <div>
      {/* Renderiza los productos */}
      <div className="caja-producto">
        <h2>Product static</h2>
        <p>Descripcion:</p>
        <p>Lorem ipsum dolor sit amet 
           fugiat!</p>
        <p><b>Precio $ </b>3000</p>
        <ItemCount initial={1} stock={10} onAdd={(cantidad) => console.log('Cantidad agregado', cantidad)}/>

      </div>
      
    </div>
  );
}

export default Producto;