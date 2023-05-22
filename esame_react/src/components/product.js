import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
export default function Product(){
    let { state } = useLocation()
    const[product, setProduct] = useState({})
    useEffect(() => {
        async function fetchProducts() {
            let res = await fetch(`https://dummyjson.com/products/${state.id}`)
            let json = await res.json()
            setProduct(json)
        }
        fetchProducts()
    }, [state.id])

    return <>
    <h2> {product.title}</h2>
    <img src={product.thumbnail} alt={product.title}></img>
    <div className="post">{product.description}</div> 
    <p className="price">{product.price}€</p>   
    <p>brand: {product.brand}</p>    
    <button
    >Aggiungi al carrello</button>
    </>
}