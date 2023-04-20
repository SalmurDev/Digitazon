// Creare un array di 5 parole.
// Iterare su questo array in 2 modi.
// PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.
// DOPO con un foreach, per stampare tutte le parole dell'array in ordine
let a = ['sgabello', 'formaggio', 'borraccia blu', 'cazzo di gomma', 'cannuccia']
function invertUp(arr) {
    let i = arr.length - 1
    while (i >= 0) {
        console.log(arr[i].toUpperCase())
        i--
    }
}
invertUp(a)
function print(arr) {
    arr.forEach(el => console.log(el))
}
print(a)