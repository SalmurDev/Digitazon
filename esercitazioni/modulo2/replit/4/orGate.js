// scrivere una funzione chiamata orGate che 
// riceve in ingresso due booleani
// sfruttando la funzione nand che trovate sotto
// ritorni false solo se vengono passati false e false
// true altrimenti

// non si possono usare if, or, and, e not dentro la funzione andGate
// non si puo' cambiare la funzione nand

// ad esempio con true e true ritorna true
// ad esempio con true e false ritorna true
// ad esempio con false e true ritorna true
// ad esempio con false e false ritorna false

function nand(b1, b2) {
    return !(b1 && b2)
}


function orGate(b1, b2) {
    return nand(nand(b1, b1), nand(b2, b2))
}

console.log(orGate(true, true));
console.log(orGate(true, false));
console.log(orGate(false, true));
console.log(orGate(false, false));