// Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
// “pazza”.
// Una stringa e’ “pazza” se:
// ● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
// ● finisce con “?!?”
// ● contiene la stringa “Cthulhu”
// ● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
// ● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”
// Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la
// stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
// ● Church
// ● mare
// Esempi di stringhe pazze:
// ● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
// ● Andare a rimirare
// Esempi di stringhe non pazze:
// ● Lui e’ pazzo.
// ● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
// amano ~
// ● ~ Papa’, come sta Church? ~

// funzione che stabilisce se una stringa è pazza

function stringaPazza(string) {
    if (string.includes('Church') || string.includes('mare')) return false
    if (!string.includes('Lui') && !string.includes('Lei') && !string.includes('Egli') && !string.includes('Ella')) return true
    if (string.includes('Cthulhu')) return true
    if (string.charAt(0) == ',' || string.charAt(0) == '.' || string.charAt(0) == '!' || string.charAt(0) == '?' || string.charAt(0) == ':' || string.charAt(0) == ';' || string.charAt(0) == '-' || string.charAt(0) == '~') return true
    if (string.charAt(string.length - 3) == '?' && string.charAt(string.length - 2) == '!' && string.charAt(string.length - 1) == '?') return true
    let arr = string.split(' ')
    let lastWord = arr[arr.length - 1]
    if (lastWord.charAt(lastWord.length - 1) == 'e' && lastWord.charAt(lastWord.length - 2) == 'r') {
        if (lastWord.charAt(lastWord.length - 3) == 'a' || lastWord.charAt(lastWord.length - 3) == 'e' || lastWord.charAt(lastWord.length - 3) == 'i') return true
    }
    return false
}

let s1 = '.Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.'
let s2 = 'Andare a rimirare'
let s3 = 'Lui e’ pazzo.'
let s4 = '~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~'
let s5 = 'Papa’, come sta Church?'
console.log(stringaPazza(s1))
console.log(stringaPazza(s2))
console.log(stringaPazza(s3))
console.log(stringaPazza(s4))
console.log(stringaPazza(s5))

// funzione che dà un risultato più carino

function pazza(f) {
    return f ? 'la stringa è pazza' : 'la stringa non è pazza'
}

console.log(pazza(stringaPazza(s1)))
console.log(pazza(stringaPazza(s2)))
console.log(pazza(stringaPazza(s3)))
console.log(pazza(stringaPazza(s4)))
console.log(pazza(stringaPazza(s5)))