// funziona ma non piace ad Alberto

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]

function findIndex(array, n) {
    let arr = array.slice()
    let find = { index: 0 }
    dividiEtImpera(arr, n, find)
    return find.index
}
function dividiEtImpera(arr, n, obj) {
    if (arr.length == 0) return
    middle = Math.floor(arr.length / 2)
    if (arr[middle] == n) {
        obj.index += middle
        return
    }
    if (arr[middle] < n) {
        obj.index += arr.splice(0, middle + 1).length
        // obj.index += middle
        dividiEtImpera(arr.splice(-middle), n, obj)
    }
    if (arr[middle] > n) dividiEtImpera(arr.splice(0, middle), n, obj)
}


console.log(findIndex(a, 25))
console.log(findIndex(a, 17))
console.log(findIndex(a, 13))
console.log(findIndex(a, 11))
console.log(findIndex(a, 10))
console.log(findIndex(a, 7))
console.log(findIndex(a, 4))
console.log(findIndex(a, -1))