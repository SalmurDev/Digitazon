// Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
// richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
// con i relativi importi totali.

let str = `
Cancelleria
500
40
60

Servizi igienici
1000
1
200

Vendite
0
`

//trasformare la stringa in un array togliendo i caratteri a capo

function stringToArray(string) {
    let arr = string.split('\n')
    arr = removeEmptyString(arr)
    return arr
}



// rimuovi le stringhe vuote dall'array
// trasforma i numeri stringa in numeri

function removeEmptyString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '') arr.splice(i, 1)
        // per qualche motivo a me oscuro se metto nell'if Number(arr[i]) != NaN non funziona, 
        // quindi utilizzo questa versione, supponendo che la spesa non possa essere negativa
        if (arr[i] > 0 || arr[i] == '0') arr[i] = Number(arr[i])
    }
    return arr
}

// creo la funzione che dato un array ordinato
// ne restituisce un altro che assegna ad ogni reparto la spesa

function assignCostToDepartment(arr) {
    let result = []
    for (let i = 0, j = 0; i < arr.length;) {
        if (typeof arr[i] == 'string') {
            result.push({ 'reparto': `${arr[i]}` })
            i++
            let spent = 0
            while (typeof arr[i] == 'number') {
                spent += arr[i]
                i++
            }
            result[j].spesa = spent
            j++
        }
        else i++
    }
    return result
}

let a = stringToArray(str)
console.log(assignCostToDepartment(a));
let DepartmentCosts = assignCostToDepartment(a)

// creo una funzione che trova il reparto che spende di più e una che trova quello che spende di meno, 
//e le funzioni che trovano gli importi (perchè preferisco dare un return e non un console.log alle funzioni se posso)

function MaxDepartment(arr) {
    let max = arr[0].spesa
    let department = arr[0].reparto
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].spesa > max) {
            max = arr[i].spesa
            department = arr[i].reparto
        }
    }
    return department
}
function findMax(arr) {
    let max = arr[0].spesa
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].spesa > max) {
            max = arr[i].spesa
        }
    }
    return max
}
function MinDepartment(arr) {
    let min = arr[0].spesa
    let department = arr[0].reparto
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].spesa < min) {
            min = arr[i].spesa
            department = arr[i].reparto
        }
    }
    return department
}
function findMin(arr) {
    let min = arr[0].spesa
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].spesa < min) {
            min = arr[i].spesa
        }
    }
    return min
}
console.log(`Il reparto che ha speso di più è il reparto ${MaxDepartment(DepartmentCosts)} e ha speso: ${findMax(DepartmentCosts)}. \nIl reparto che ha speso di meno è il reparto ${MinDepartment(DepartmentCosts)} e ha speso: ${findMin(DepartmentCosts)}.`);
