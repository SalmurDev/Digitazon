import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

export default function Find() {
    const [search, setSearch] = useState('')
    const [postId, getPostId] = useState([])
    let posts = []
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
            let json = await res.json()
            let sliced = json.slice(0, 5)
            sliced.forEach(el => {
                posts.push(el.body)
            });
        }
        fetchPosts()
    })
    function check() {
        let ids = []
        if(search !== '')posts.forEach((el, i) => {
            if (el.includes(search)) ids.push(i + 1)
        })
        getPostId(ids)
    }
    return <>
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" onClick={check}>Cerca</button>
        </div>
        <div className="foundlinks">
            {postId.map((el) => (
                <Link to="/post" state={{ id: `${el}` }} className="found">
                    Post{el}
                </Link>
            ))}
        </div>
    </>
}