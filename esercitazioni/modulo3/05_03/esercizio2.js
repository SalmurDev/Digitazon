//Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo le seguenti chiavi:
//  * "chiave1"
// * "chiave2"
// a prescindere da quante ce ne siano nell'oggetto.
// Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare lo spread operator

function findKey({chiave1,chiave2}){
    return `la chiave 1 è ${chiave1} e la chiave 2 è ${chiave2}`
}

const obj = {
    chiave1: 'Mario',
    chiave2: 'Rossi',
    chiave3: '23 anni'
}

console.log(findKey(obj));