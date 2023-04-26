// scrivere una funzione chiamata functionsReturningNumbers che 
// date due funzioni in ingresso f e g
// dove entrambe le funzioni ritornano un certo numero
// ritorna "f" se il numero ritornato da f e' maggiore del 
// numero ritornato da g
// ritorna "g" se il numero ritornato da g e' maggiore del 
// numero ritornato da f
// ritorna "nessuna" se sono uguali


function functionsReturningNumbers(f, g) {
    if (f > g) return f
    if (g > f) return g
    if (g === f) return 'nessuna'
}

function sum(a, b) {
    return a + b
}
function multiply(a, b) {
    return a * b
}
console.log(functionsReturningNumbers(sum(4, 4), multiply(2, 4)))
