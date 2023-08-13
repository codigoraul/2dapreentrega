import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Products = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => {
            console.log(json);
            setProducts([...json]);
        } )
            .catch((error) => console.error(error))
            .finally(() =>setIsLoading(false))

    },[]);

    if(isLoading)

  return (
    <div> 
        <h2>Cargando ...</h2></div>
  )
  return (
     <div> 
        <div className="container">
            <h2 className="">Products</h2>
     {products.map((product) =>(
       
         <article >
          <Link key={product.id} to={`/products/${product.id}`}>   <h4>{product.title}</h4>  </Link>
            <p>{product.description}</p>
        </article>
        
          
       ))}
     </div>
     </div> );
}

export default Products