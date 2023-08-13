import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const[isLoading, SetIsLoading] = useState(true)
    const[item, setItem] = useState({})
    useEffect(()=>{
        setTimeout(()=>{
            setItem({
                descripcion: 'Buzo blanco sin capucha',
                precio: 3000
            })

        }, 2000)

    },[])

  return (
    <div>
        isLoading ? <h2>Cargando..</h2> : <main>
            <ItemDetail descripcion={item.descripcion} precio={item.precio} />
        </main>

    </div>
  )
}

export default ItemDetailContainer