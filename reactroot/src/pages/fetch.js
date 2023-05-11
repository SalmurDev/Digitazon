import { useState, useEffect } from "react"
import './fetch.css';

const Fetch = () => {
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
        <div className="products">
            <h1>Fetch</h1>
            {products.map((obj) =>
            (<>
                <h2>{obj.title}</h2>
                <img src={obj.image} alt=''></img>
            </>)
            )}
        </div>
    )
}

export default Fetch;