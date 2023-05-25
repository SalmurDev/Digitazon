import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function fetchCategories() {
      let res = await fetch('https://dummyjson.com/products/categories')
      let json = await res.json()
      setCategories(json)
    }
    fetchCategories()
  }, []
  )
  return <>
    <h2>Categories</h2>
    <ul className="categories">
      {categories.map((c) => (
        <li>
          <Link to="/category" state={{ category: c }}>
            {c}
          </Link>
        </li>
      ))}
    </ul>
  </>;
};

export default Home;