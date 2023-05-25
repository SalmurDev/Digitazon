import { useState } from "react";
import './stringaRgb.css'

// scrivere un componente che mostri il colore relativo ad una stringa RGB: deve essere una input per R, una per G, una per B. 
// Una volta che l'utente ha inserito i tre valori il colore deve apparire in una zona dedicata.


export default function StringaRgb() {
    const [r, setR] = useState(0)
    const [g, setG] = useState(0)
    const [b, setB] = useState(0)
    const [rgb, setRgb] = useState('')

    function setColor() {
        setRgb(`rgb(${r},${g},${b})`)
    }

    return <>
        <h1>Stringa RGB</h1>
        <div className="flex">
            <div className="w-100">Red</div>
            <input
                type="number"
                min={0}
                max={255}
                onChange={(e) => setR(e.target.value)}
            ></input>
        </div>
        <div className="flex">
            <div className="w-100">Green</div>
            <input
                type="number"
                min={0}
                max={255}
                onChange={(e) => setG(e.target.value)}
            ></input>
        </div>
        <div className="flex">
            <div className="w-100">Blue</div>
            <input
                type="number"
                min={0}
                max={255}
                onChange={(e) => setB(e.target.value)}
            ></input>
        </div>
        <button
            onClick={setColor}
        >scegli il tuo colore</button>
        <div
            style={{
                width: '100px',
                height: '50px',
                backgroundColor: rgb
            }}
        ></div>
    </>
}