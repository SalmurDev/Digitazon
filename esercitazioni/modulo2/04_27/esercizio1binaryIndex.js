const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20]

function findIndex(array, n) {
    if (n > array[array.length - 1]) return array.length
    let find = {
        start: 0,
        index: 0,
        end: array.length - 1
    }
    dividiEtImpera(array, n, find)
    return find.index
}

function dividiEtImpera(arr, n, obj) {
    if (obj.start > obj.end) return
    middle = Math.round((obj.start + obj.end) / 2)
    if (arr[middle] == n) {
        obj.index = middle
        return
    }
    if (obj.start == obj.end) {
        if (n > arr[middle]) obj.index = obj.start + 1
        else obj.index = obj.start
        return
    }
    if (n > arr[middle]) {
        obj.start = middle + 1
        dividiEtImpera(arr, n, obj)
    }
    if (n < arr[middle]) {
        obj.end = middle-1
        dividiEtImpera(arr, n, obj)
    }
}

console.log(findIndex(a, 25))
console.log(findIndex(a, 17))
console.log(findIndex(a, 13))
console.log(findIndex(a, 11))
console.log(findIndex(a, 10))
console.log(findIndex(a, 9))
console.log(findIndex(a, 6))
console.log(findIndex(a, -1))