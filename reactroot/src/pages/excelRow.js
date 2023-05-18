// si richiede di creare un componente che sia la versione estremamente semplificata di una riga di Excel. Si devono creare n input dove n e' una prop, ogni qualvolta un input cambia si deve salvare nello stato:
//  * il numero totale di celle che hanno un valore al loro interno
//  * un array con tutti i valori nelle celle

import { useState } from "react";
import './excelRow.css';

export default function ExcelRow() {
    const [n, setN] = useState(0)
    const [cells, setCells] = useState([])
    const [valueCells, setValueCells] = useState(0)

    function countValues(){
        let count = 0
        for (let i = 0; i < cells.length; i++) {
            if(cells[i] !== '') count++
        }
        setValueCells(count)
    }
    
    return <>
        <h1>Excel Row</h1>
        <div className="rows">
            <div>
                <input
                    type="number"
                    placeholder="inserisci il numero di celle"
                    onChange={(e) => (
                        setN(Number(e.target.value))
                    )}
                ></input>
                <button
                    onClick={() => setCells([...Array(n).fill('')])}
                >crea celle</button>                
            </div>
            {cells.map((v, i) => (
                <input
                    id={i}
                    type="number"
                    onChange={(e) => {
                        let actualCells = cells
                        actualCells[i] = e.target.value
                        countValues()
                    }}
                ></input>))}                
            <p>celle non vuote:{valueCells}</p>
        </div>
    </>
}