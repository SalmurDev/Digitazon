// Meno semplice: scrivere un componente che rappresenti una TODO list prendendo gli elementi della lista da questo endpoint: https://jsonplaceholder.typicode.com/todos
// Ogni componente deve avere una checkbox, se la checkbox viene flaggata il componente finisce in fondo alla lista e diventa piu' opaco
import './toDoList.css';
import { useState, useEffect } from "react"

export function MakeListElement({ title }) {
    const [check, setCheck] = useState(false)
    function getClass(check) {
        if (check) return 'checked'
        return 'notChecked'
    }
    return (
        <li
            className={getClass(check)}
        >
            <input
                type='checkbox'
                onChange={() => setCheck(!check)}
            ></input>
            <p>{title}</p>
        </li>)
}

export default function ToDoList() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchList() {
            let actualList = await fetch('https://jsonplaceholder.typicode.com/todos')
            let json = await actualList.json()
            setList(json)
        }
        fetchList()
    }, [])

    return (
        <ul>
            {list.map((el, i) => ((i < 10) ? <MakeListElement title={el.title} /> : ''))}
        </ul>
    )
}