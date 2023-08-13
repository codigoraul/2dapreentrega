import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Product = () => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => response.json())
        .then((json) => { 
            console.log(json);
            setProduct([...json]);
    } )
        .catch((error) => console.error(error))
        .finally(() =>setIsLoading(false))
    },[] )

    if(isLoading)
        return(
            <div>Cargando..</div>
        )
    console.log(params)
  return (
    <div>
        {
            product.map(product =>{
                <p>{product.title}</p>
            })
        }
         
        
    </div>
  )
}

export default Product