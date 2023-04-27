function findInt(arr, n) {    
    arr.push(n)
    arr.sort((a, b) => a - b)
    return arr.indexOf(n)
}
console.log(findInt([1, 3, 5, 6], 5))
console.log(findInt([1, 3, 5, 6], 2))
console.log(findInt([1, 3, 5, 6], 7))