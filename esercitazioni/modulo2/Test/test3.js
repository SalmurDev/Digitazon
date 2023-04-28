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

<<<<<<< HEAD
console.log(JSON.stringify(tree).match('{'))

//crea un loop che cicla all'interno dell'oggetto
//se trova la parola, ritorna 1 + un contatore che parte da 0
//se trova un oggetto, cicla nuovamente al suo interno e aggiunge 1 al contatore
//continua in questo modo finchè non trova la parola
//ad ogni iterazione del loop, se non ha trovato la parola, il contatore torna a 0
//se non la trova mai ritorna -1


// function findPerson(object, person, count) {    
//     for (const key in object) {
//         if (object[key] == person) return count
//         if (typeof object[key] == 'object') 
//             findPerson(object[key], person, count+1)
//     }
//     return -1
// }
// console.log(findPerson(tree, 'Nimloth the Fair',1))

// function findChar(object, person, depth){
//     if(!object) return
//     if(object.value == person) return depth
//     if(object.left)findChar(object.left, person, depth+1)
//     if(object.right)findChar(object.right, person, depth+1)
//     return -1
// }
// console.log(findChar(tree, 'Eowin', 1))
=======
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
>>>>>>> 8683725567f791b26565c36452b01cce62c8dc80
