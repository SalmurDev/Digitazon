function findInt2(arr, n, i, obj) {
    if (arr[i] == n || arr[i] > n) {
        obj.index = i
        return
    }
    if (i >= arr.length) {
        obj.index = arr.length
        return
    }
    findInt2(arr, n, i + 1, obj)
}
function recursiveFind(arr, m) {
    let i = { index: 0 }
    let n = m
    findInt2(arr, n, 0, i)
    return i.index
}
console.log(recursiveFind([1, 3, 5, 6], 5))
console.log(recursiveFind([1, 3, 5, 6], 2))
console.log(recursiveFind([1, 3, 5, 6], 7))