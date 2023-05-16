import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './Layout.css';
import Find from './Find'
const Layout = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            let sliced = json.slice(0, 5)
            setPosts(sliced)
        }
        fetchPosts()
    }, [])
    return (
        <>
            <div className="page">
                <header>
                    <h1>Il mio forum</h1>
                    <div className="findbar">
                        <Find />
                    </div>
                </header>
                <main>
                    <nav>
                        <ul className="layout">
                            <li className="postbar">
                                <Link to="/">Home</Link>
                            </li>
                            {posts.map((obj) => (
                                <li className="postbar">
                                    <Link to="/post" state={{ id: `${obj.id}` }}>
                                        Post{obj.id}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="posts">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>

    )
};

export default Layout;