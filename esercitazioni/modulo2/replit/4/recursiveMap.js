// scrivere una funzione chiamata recursiveMap che 
// dato un array e una funzione
// chiama la funzione su ogni elemento dell'array, ritornando un
// nuovo array con i risultati

// non potete usare cicli for o cicli while

// non potete modificare la firma della funzione, ma potete usare
// funzioni ausiliarie, anzi, e' consigliato

// ad esempio con [1,2,3] e n => n * 2 ritorna [2,4,6]

// tenete presente che non potete sapere cosa faccia la funzione
// passata come parametro, dovete solo applicarla all'i-esimo
// elemento e tenere traccia del risultato


function recursive(arr, fn, i, r) {
    if (i >= arr.length) return
    r.push(fn(arr[i]))
    recursive(arr, fn, i + 1, r)
}

function recursiveMap(arr, fn) {
    let result = []
    recursive(arr, fn, 0, result)
    return result
}

let array = [1, 2, 3, 4]
function double(a) {
    return a * 2
}

console.log(recursiveMap(array, double))