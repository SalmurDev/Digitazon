import { useState, useEffect } from "react"

export default function Fetch() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            let res = await fetch('https://fakestoreapi.com/products')
            let json = await res.json()
            setProducts(json)
            console.log(json);
        }
        fetchProducts()
    }, [])
    return (
        <>
            <h1>Fetch</h1>
            {products.map((obj) =>
            (<>
                <h2>{obj.title}</h2>
                <img src={obj.image} alt=''></img>
            </>)
            )}
        </>
    )
}