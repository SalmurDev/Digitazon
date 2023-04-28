// dati due array ordinati, creare una funzione chiamata merge, che prende in ingresso i due array e ne ritorna uno solo, ordinato
function merge(arr1, arr2) {
    let array = []
    const length = arr1.length + arr2.length
    const a1 = arr1.slice()
    const a2 = arr2.slice()
    for (let i = 0; i < length; i++) {
        if (a1[0] <= a2[0]) {
            array.push(a1.shift())
        }
        else {
            array.push(a2.shift())
        }
    }
    return array
}

console.log(merge([1, 3, 5], [2, 4, 6, 7, 8]))
console.log(merge([1, 2], [3, 4]))