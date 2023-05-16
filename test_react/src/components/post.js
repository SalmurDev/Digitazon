import { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
export default function Post(){
    let { state } = useLocation()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`)
            let json = await res.json()
            let text = json.body
            setPost(text)
            let res2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}/comments`)
            let json2 = await res2.json()
            let bodies = []
            json2.forEach(el => bodies.push(el.body))
            setComments(bodies)
        }
        fetchPosts()
    }, [state.id])

    return <>
    <h2>Post {state.id}</h2>
    <div className="post">{post}</div>
    {comments.map((c) =>(<div className="comment">{c}</div>))}
    </>
}