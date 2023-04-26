// 2 - Find and update
// Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
// sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
// regole:
// ● se il type e’ “boolean” deve aggiornare usando false
// ● se il type e’ “string” deve aggiornare usando stringa vuota
// ● se il type e’ “number” deve aggiornare usando 0
// ● se il type e’ “array” deve aggiornare usando array vuoto
// ● se il type e’ “object” deve aggiornare usando oggetto vuoto
// Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
// sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
// La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.

let array = [
    {
        'maggiorenne': null,
        'type': 'boolean'
    }, {
        'nome': null,
        'type': 'string'
    }, {
        'cognome': 'Rossi',
        'type': 'string'
    }, {
        'voti': null,
        'type': 'array'
    }, {
        'media': null,
        'type': 'number'
    }, {
        'presenze': null,
        'type': 'object'
    }

]

function findUpdate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            if (arr[i][key] == null) {
                if (arr[i].type == 'boolean') arr[i][key] = false
                if (arr[i].type == 'string') arr[i][key] = ''
                if (arr[i].type == 'number') arr[i][key] = 0
                if (arr[i].type == 'array') arr[i][key] = []
                if (arr[i].type == 'object') arr[i][key] = {}
            }
        }
    }
    return arr
}
console.log(findUpdate(array));