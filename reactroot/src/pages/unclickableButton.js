import { useState } from "react";
import './unclickableButton.css';

export default function UnclickableButton() {
    const [leftValue, setLeftValue] = useState('200px')
    const [topValue, setTopValue] = useState('200px')

    function randomValue(n) {
        return (Math.random() * (n)) + 'px' 
    }

    return <>
        <div
            style={{                
                position: "relative",
                left: leftValue ,
                top:  topValue 
            }}
            onMouseOver={() => {
                setLeftValue(randomValue(window.innerWidth-250));
                console.log(leftValue);
                setTopValue(randomValue(window.innerHeight-50));
                console.log(topValue)
            }}>
            <button>
                click me!
            </button>
        </div>

    </>



}