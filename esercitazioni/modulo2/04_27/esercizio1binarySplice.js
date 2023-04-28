const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]
// lavorare su middle per capire cosa fa
function findIndex(array, n) {
    let arr = array.slice()    
    return dividiEtImpera(arr, n)
}
function dividiEtImpera(arr, n, middle = 0) {
    if (arr.length == 0) return
    mid = Math.round(arr.length / 2) + middle
    if (arr[mid] == n) {
        return mid
    }
    if (arr[mid] < n) {
        dividiEtImpera(arr.splice(-(mid-1)), n,mid)
        // obj.index += arr.splice(0, middle + 1).length
    }
    if (arr[mid] > n) dividiEtImpera(arr.splice(0, mid), n)
}


console.log(findIndex(a, 25))
console.log(findIndex(a, 17))
console.log(findIndex(a, 13))
console.log(findIndex(a, 11))
console.log(findIndex(a, 10))
console.log(findIndex(a, 7))
console.log(findIndex(a, 4))
console.log(findIndex(a, -1))