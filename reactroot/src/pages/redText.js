import { useState } from "react";
import './redText.css';

// scrivere un componente che rappresenti un input text, quando l'input e' vuoto oppure ha dentro solo dei numeri, 
// oppure solo della punteggiatura, deve avere il bordo rosso.
// Quando la pagina carica non deve subito partire dal rosso, ma arrivarci solo dopo che l'utente ha scritto qualcosa.

export default function RedText() {
    const [red, setRed] = useState(false)
    function checkInput(s) {
        let red = false
        for (let i = 0; i < s.length; i++) {
            if (!isNaN(parseInt(s.charAt(i), 10))) red = true
            else red = false
        }
        if (red === true) return true
        const punkt = ['.', ',', ';', ':']
        for (let i = 0; i < s.length; i++) {
            if (punkt.includes(s.charAt(i))) red = true
            else red = false
        }
        if (red === true) return true
        return false
    }
    return (
        <>
            <input
                type="text"
                className={red ? 'red' : 'none'}
                onChange={(e) => setRed(checkInput(e.target.value))}
            ></input>
        </>
    )
}