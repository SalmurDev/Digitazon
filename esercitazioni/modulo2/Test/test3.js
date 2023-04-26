// 3 - L’Albero del Re
// Affrontare questo esercizio solo se si sono risolti i precedenti due.
// Dato questa struttura ad albero:
// navigarla visitando i nodi alla ricerca del valore “Nimloth the Fair”, se trovato ritornare a che
// distanza si trova dalla radice dell’albero, se non trovato ritornare -1.
// Non e’ detto che l’albero con cui valutero’ il vostro esercizio avra’ questa struttura.
// Non abbiamo mai visto questo tipo di strutture dati a lezione, per questo motivo l’esercizio e’
// interamente opzionale.

let tree = {
    'value': 'Arwen',
    'left': {
        'value': 'Earendil',
        'left': {
            'value': 'Nimloth the Fair',
            'left': 'null',
            'right': 'null'
        },
        'right': {
            'value': 'Galadriel',
            'left': {
                'value': 'Eowin',
                'left': 'null',
                'right': 'null'
            },
            'right': 'null'
        },
    },
    'right': {
        'value': 'Shelob',
        'left': 'null',
        'right': 'null'
    }
}

// funzione ricorsiva che funziona soltanto se le chiavi sono left e right

function findDepth(tree, person, obj, depth) {
    if (!tree) return
    if (tree.value == person) obj.currentDepth = depth
    findDepth(tree.left, person, obj, depth + 1)
    findDepth(tree.right, person, obj, depth + 1)
}
function findChar(tree, person) {
    const obj = { currentDepth: -1 }
    findDepth(tree, person, obj, 1)
    return obj.currentDepth
}

console.log(findChar(tree, 'Nimloth the Fair'))