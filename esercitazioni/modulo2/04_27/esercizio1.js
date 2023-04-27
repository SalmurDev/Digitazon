// Dato un array ordinato di interi tutti diversi, e un numero target, ritornare l'indice al quale il target e' trovato. Se non viene trovato ritornare l'indice al quale andrebbe inserito per mantenere l'ordine

function findInt(arr, n) {
    if (arr[arr.length - 1] < n) return arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n || arr[i] > n) return i
    }
}
console.log(findInt([1, 3, 5, 6], 5))
console.log(findInt([1, 3, 5, 6], 2))
console.log(findInt([1, 3, 5, 6], 7))
let a = [1,2,5,7,9,10,11,12]
