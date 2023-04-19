let n1 = 8

function fatt(n) {
    let f = 1
    for (i = 1; i <= n; i++) f *= i
    return f
}
console.log(`il fattoriale di ${n1} è: ${fatt(n1)}`);

function fattR(n) {
    if (n <= 1) return 1
    else return n * fattR(n - 1)
}
console.log(`il fattoriale ricorsivo di ${n1} è: ${fattR(n1)}`);