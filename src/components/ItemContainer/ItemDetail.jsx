const ItemDetail = ({descripcion, precio}) => {
  return (
    <article>
        <h5>Producto</h5>
        <p> Descripcion: {descripcion}</p>
        <p> Precio:  {precio}</p>

    </article>
  )
}

export default ItemDetail