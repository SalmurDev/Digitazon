import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function Find() {
    const [search, setSearch] = useState('')
    const [productId, getProductId] = useState([])
    const [titles, getTitles] = useState([])
    useEffect(() => {
        async function fetchTitles() {
            let res = await fetch(`https://dummyjson.com/products?limit=100`)
            let json = await res.json()
            let t = []
            json.products.forEach(el => {
                (t.push(el.title))
            });
            getTitles(t)
        }
        fetchTitles()
    }, [])
    function check() {
        let ids = []
        if (search !== '') titles.forEach((el, i) => {
            if (el.toLowerCase().includes(search.toLowerCase())) ids.push(i + 1)
        })
        getProductId(ids)
    }
    return <>
        <div>
            <input
                type="text"
                placeholder="cerca un prodotto"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" onClick={check}>Cerca</button>
        </div>
        <ul>
            {productId.map((el) => (
                <li>
                    <Link to="/product" state={{ id: el }} >
                        {titles[el - 1]}
                    </Link>
                </li>
            ))}
        </ul>
    </>
}