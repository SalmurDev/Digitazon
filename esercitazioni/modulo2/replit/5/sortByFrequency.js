// scrivere una funzione chiamata sortByFrequency che 
// dato un array di interi
// ritorni un nuovo array ordinato in modo che i numeri compaiano
// in base alla frequenza nell'array originale, se due numeri hanno
// la stessa frequenza vanno ritornati in ordine crescente

// ad esempio con [1,2,3,2,4,2,5,2,3,1] ritorna [2,2,2,2,1,1,3,3,4,5]


function Sort(map1, map2) {
    let max = 0
    map1.forEach(function (v) {
        if (v > max) max = v
    })
    map1.forEach(function (v, k) {
        if (v == max) {
            map2.set(k, v)
            map1.delete(k)
        }
    })
    if (map1.size != 0) Sort(map1, map2)
}

function sortByFrequency(arr) {
    let a = arr.sort((a, b) => a - b)
    let countNum = new Map()
    for (let i = 0; i < a.length; i++) {
        if (countNum.has(a[i])) countNum.set(a[i], countNum.get(a[i]) + 1)
        else countNum.set(a[i], 1)
    }
    let sorted = new Map()
    Sort(countNum, sorted)
    let result = []
    sorted.forEach(function (v, k) {
        result = result.concat(Array(v).fill(k))
    })
    return result
}

const a = [1, 2, 3, 2, 4, 2, 5, 2, 3, 1]
console.log(sortByFrequency(a))