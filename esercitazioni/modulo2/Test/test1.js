// 1 - Find and replace
// Scrivere una funzione che riceva in ingresso tre stringhe:
// ● la prima sara’ un testo
// ● la seconda sara’ una parola che andra’ cercata nel testo
// ● la terza sara’ la parola da sostituire al posto della seconda
// La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
// replace di una parola in un testo.
// Si assuma che:
// ● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
// non ci saranno spazi
// ● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
// l’algoritmo
// ● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
// caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
// La funzione deve ritornare la nuova stringa aggiornata.

function findReplace(txt,word,repl){
    let arr = txt.split(' ')
    for (let i = 0; i < arr.length; i++) {        
        if(arr[i] == word) arr.splice(i,1,repl)
    }
    let result = ''
    arr.forEach(el => {
        result += el + ' '
    });
    result.trim()
    return result
}

let string = 'tanto va la gatta al lardo che ci mette lo zampino'
let find = 'zampino'
let replace = 'strutto' 
console.log(findReplace(string,find,replace))