import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

export default function Category() {
    let { state } = useLocation()
    let category = state.category
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchProducts() {
            let res = await fetch(`https://dummyjson.com/products/category/${category}`)
            let json = await res.json()
            setProducts(json.products)
        }
        fetchProducts()
    }, [category]
    )
    return <>
        <h2>{category}</h2>
        <ul className="category">
            {products.map((p) => (
                <li>
                    <Link to="/product" state={{ id: `${p.id}` }}>
                        <img src={p.thumbnail} alt={p.title}></img>
                        {p.title}
                    </Link>
                </li>
            ))}
        </ul>
    </>
}