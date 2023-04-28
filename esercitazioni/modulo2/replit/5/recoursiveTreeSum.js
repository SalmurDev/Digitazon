// scrivere una funzione chiamata recursiveTreeSum che 
// data in ingresso:
// * una funzione in grado di produrre un risultato a partire da uno stato
//   ed il valore del nodo corrente
// * uno stato iniziale
// * un albero binario
// ritorna il risultato dell'applicazione della funzione a tutti i 
// nodi dell'albero

// questa e' chiamata una funzione di fold (o piu' imprecisamente di
// reduce)
// non potete usare cicli for o cicli while

// ad esempio passando
// * come funzione (state, value) => state + value 
// * come stato iniziale 0
// * come albero {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 3
//     },
//     right: {
//       value: 6
//     }
//   },
//   right: {
//     value: 4,
//     right: {
//       value: 5
//     }
//   }
// }
// la funzione ritorna 21

let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3
        },
        right: {
            value: 6
        }
    },
    right: {
        value: 4,
        right: {
            value: 5
        }
    }
}

let sum = (state, value) => state + value

function recursiveTreeSum(reducer, state, tree) {
    const obj = { actualValue: state }
    treeRed(reducer, tree, obj)
    return obj.actualValue
}

function treeRed(reducer, tree, obj) {
    if (!tree) return
    obj.actualValue = reducer(obj.actualValue, tree.value)
    treeRed(reducer, tree.left, obj)
    treeRed(reducer, tree.right, obj)
}

console.log(recursiveTreeSum(sum, 0, tree));