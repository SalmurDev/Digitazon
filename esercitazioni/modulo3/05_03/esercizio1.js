// Scrivere una funzione AND che si comporti come l'and nei booleani (&&) e accetti un numero qualsiasi di parametri

function AND(...boolean) {
    let result = boolean[0]
    for (let i = 1; i < boolean.length; i++) {
        if (result === false) return result
        result = boolean[i] && result
    }
    return result
}

console.log(AND(false));
console.log(AND(true));
console.log(AND(true, false));
console.log(AND(true, true, true, true))
console.log(AND(false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false));
console.log('-----------');

let t1 = () => AND(false)
let t2 = () => AND(true)
let t3 = () => AND(true, false)
let t4 = () => AND(true, true, true, true)
let t5 = () => AND(false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false)

let tryAnd = [
    {
        input: t1,
        expected: false
    },
    {
        input: t2,
        expected: true
    },
    {
        input: t3,
        expected: false
    },
    {
        input: t4,
        expected: true
    },
    {
        input: t5,
        expected: false
    }
]
let test = tryAnd.reduce((start, s) => (AND(s.input()) === s.expected) && start, true)

console.log(test)