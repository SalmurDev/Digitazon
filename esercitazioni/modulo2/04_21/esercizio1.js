// creare un array in cui occorre includere 5 dati di tipi diversi:
// - un letterale oggetto con proprietà x: 10 e y: 5
// - un numero (100)
// - una stringa ("javascript")
// - una mappa ("label" -> "sono una mappa")
// - un array [40, 50, 60]

// Iterare sull'array esterno con un foreach e...
// se l'elemento corrente è...

// un letterale oggetto, stampa la somma delle sue proprietà x e y
// un numero, controlla se è > 100 scrivi red, altrimenti blue
// una stringa, stampa il suo primo carattere
// una mappa, stampa il valore della sua proprietà "label", se ce l'ha
// un array, stampa i numeri in ordine inverso


// let arr = [
//     { x: 10, y: 5 },
//     100,
//     'javascript',
//     new Map([['label', 'sono una mappa']]),
//     [40, 50, 60]
// ]
// arr.forEach(el => {
//     if (Object.getPrototypeOf(el) === Object.prototype) console.log(el.x + el.y)
//     if (typeof el == 'number')
//         if (el > 100) console.log('red')
//         else console.log('blue')
//     if (typeof el == 'string') console.log(el.charAt(0))
//     if (el instanceof Map)
//         if (el.has('label'))
//             console.log(el.get('label'));
//     if (Array.isArray(el)) for (let i = el.length - 1; i >= 0; i--) console.log(el[i])
// });

let arr = [
    { x: 10, y: 5 },
    100,
    'javascript',
    new Map([['label', 'sono una mappa']]),
    [40, 50, 60]
]

arr.forEach(el => {
    function f(array,i){
        if(i>=0){
            console.log(array[i]) + f(array,i-1)
        }
        else return
       }
    if (Object.getPrototypeOf(el) === Object.prototype) console.log(el.x + el.y)
    if (typeof el == 'number')
        if (el > 100) console.log('red')
        else console.log('blue')
    if (typeof el == 'string') console.log(el.charAt(0))
    if (el instanceof Map)
        if (el.has('label'))
            console.log(el.get('label'));
    if (Array.isArray(el)) f(el,el.length-1)
});
