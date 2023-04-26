// scrivere una funzione chiamata recursiveHourglass che 
// dato in ingresso un numero dispari maggiore di 0
// ritorna una matrice di stringhe che rappresenti una clessidra

// non potete usare cicli for o cicli while

// ad esempio con 3 ritorna
// [ 
//  [ '*', '*', '*' ], 
//  [ ' ', '*', ' ' ], 
//  [ '*', '*', '*' ] 
// ]

// ad esempio con 5 ritorna
// [
//  ['*','*','*','*','*']
//  [' ','*','*','*',' ']
//  [' ',' ','*',' ',' ']
//  [' ','*','*','*',' ']
//  ['*','*','*','*','*']
// ]

function Hourglass(h, n, i, m) {
    if (i >= h) return
    if (i <= n) {
        let a1 = Array(i).fill(' ')
        let a2 = Array(h - (i * 2)).fill('*')
        let a3 = Array(i).fill(' ')
        const a = a1.concat(a2, a3)
        m.push(a)
    }
    if (i > n) {
        let a1 = Array(h - i - 1).fill(' ')
        let a2 = Array((i + 1) * 2 - h).fill('*')
        let a3 = Array(h - i - 1).fill(' ')
        const a = a1.concat(a2, a3)
        m.push(a)
    }
    Hourglass(h, n, i + 1, m)
}

function recursiveHourglass(n) {
    let matrix = []
    const h = (n * 2) - 1
    Hourglass(h, n - 1, 0, matrix)
    return matrix
}
console.log(recursiveHourglass(5));
