// dati due array ordinati, creare una funzione chiamata merge, che prende in ingresso i due array e ne ritorna uno solo, ordinato
function merge(arr1, arr2) {
    let array = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] <= arr2[j]) {
            array.push(arr1[i])
            i++
        }
        else {
            array.push(arr2[j])
            j++
        }
    }
    return array
}

console.log(merge([1, 3, 5], [2, 4, 6, 7, 8]))
console.log(merge([1, 2], [3, 4]))