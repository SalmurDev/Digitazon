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

// funzione ricorsiva che funziona per qualsiasi nome e numero di chiavi

function findDepth2(tree, person, obj, depth) {    
    for (const key in tree) {
        if (tree[key] == person) obj.currentDepth = depth
        if (typeof tree[key] == 'object') 
            findDepth2(tree[key], person, obj, depth+1)
    }
    return

}

function findChar2(tree, person){
    const obj = {currentDepth: -1}
    findDepth2(tree, person, obj, 1)
    return obj.currentDepth
}

console.log(findChar2(tree,'Shelob'))