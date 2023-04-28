// scrivere una funzione chiamata slice che 
// dato un array di interi e un intero
// ritorni un array formato da gruppi di sottoarray

// ad esempio con [1,2,3,4,5] e 2 ritorna [[1,2],[3,4],[5]] 

function slice(arr, size) {
    let matrix = []
    for (let i = 0; i < arr.length; i++) {
        if (i % size == 0) matrix.push([arr[i]])
        else matrix[matrix.length - 1].push(arr[i])
    }
    return matrix
}
console.log(slice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));