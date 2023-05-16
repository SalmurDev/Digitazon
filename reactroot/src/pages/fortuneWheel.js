// Scrivere una applicazione che si avvicini piu' possibile al concetto di "ruota della fortuna", quindi deve esserci una "ruota" 
// (che puo' anche non avere l'aspetto di una ruota, basta che si vedano diversi valori selezionati di volta in volta... 
// per arrivare ad uno solo finale), e deve esserci uno storico dei valori usciti.

import { useEffect, useState } from "react";
import './fortuneWheel.css';

export default function FortuneWheel() {
    const [result, setResult] = useState()
    const [wheel, setWheel] = useState()
    const [results, setResults] = useState([])
    function randomValue() {
        setResult(Math.floor(Math.random() * 9) + 1)
        let newResults = results
        newResults.push(result)
        setResults(newResults)
    }
    function moveWheel(){
        if(wheel === 9) setWheel(1)
        else setWheel(wheel+1)
    }
    function Wheeel(){
        randomValue()
    useEffect(() => {wheel!==result && moveWheel()},wheel)
    }
    return (
        <>
            <h1>Wheel of Fortune</h1>
            <button
                onClick={Wheeel}
            >Push your Luck!</button>
            <ol>
                <li className={(wheel === 1) ? 'pointer' : 'normal'}>1</li>
                <li className={(wheel === 2) ? 'pointer' : 'normal'}>2</li>
                <li className={(wheel === 3) ? 'pointer' : 'normal'}>3</li>
                <li className={(wheel === 4) ? 'pointer' : 'normal'}>4</li>
                <li className={(wheel === 5) ? 'pointer' : 'normal'}>5</li>
                <li className={(wheel === 6) ? 'pointer' : 'normal'}>6</li>
                <li className={(wheel === 7) ? 'pointer' : 'normal'}>7</li>
                <li className={(wheel === 8) ? 'pointer' : 'normal'}>8</li>
                <li className={(wheel === 9) ? 'pointer' : 'normal'}>9</li>
            </ol>
            <p>results:</p>
            <p>{results}</p>
        </>
    )
}