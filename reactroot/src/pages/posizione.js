import { useState } from "react";
import './posizione.css'

// Scrivere un componente che rappresenta un input e la sua label.
// Il componente puo' essere configurato in modo che:
// la label appaia alla sinistra dell'input o alla sua destra, in base alla prox "posizione" che puo' essere "l" o "r"
// con una funzione, passata come prop, sia possibile inibire l'inserimento di certi caratteri, specificati appunto dalla funzione stessa

export default function Posizione(){
    const [position, setPosition] = useState('r')
    function GetPosition({p}){
        return <label
        style={{
            order: (p=== 'l'?-1:1)
        }}
        >sono un label</label>
    }
    function removeChar(value){
        if(!(value === 'r' || value === 'l')) value = ''
        return value
    }

    return<>
        <h1>Posizione</h1>

    <div className="flex">
        <input
        type="text"
        maxLength={1}
        value={position}
        onChange={(e) => (setPosition(removeChar(e.target.value)))}
        ></input>
        <GetPosition p={position}/>
    </div>
    </>
}