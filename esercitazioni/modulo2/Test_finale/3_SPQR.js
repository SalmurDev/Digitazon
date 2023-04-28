// I numeri romani sono rappresentati da sette diversi simboli: I, V, X, L, C, D e M.
// Simbolo Valore
// I 1
// V 5
// X 10
// L 50
// C 100
// D 500
// M 1000
// Per esempio, il numero 2 è scritto come II in numeri romani, semplicemente due uno
// aggiunti insieme.
// Il numero 12 è scritto come XII, che è semplicemente X + II. Il numero 27 è scritto come
// XXVII, che è XX + V + II.
// I numeri romani sono di solito scritti dal più grande al più piccolo da sinistra a destra.
// Tuttavia, il numero romano per quattro non è IIII. Invece, il numero quattro è scritto come IV.
// Poiché il numero uno è prima del cinque, lo sottraiamo per ottenere quattro. Lo stesso
// principio si applica al numero nove, che viene scritto come IX.
// Ci sono sei casi in cui viene usata la sottrazione: I può essere posto prima di V (5) e X (10)
// per fare 4 e 9. X può essere posto prima di L (50) e C (100) per fare 40 e 90. C può essere
// posto prima di D (500) e M (1000) per fare 400 e 900.
// Dato un numero intero, convertirlo in un numero romano.

function convertToRoman(n){
    let r = ''
    while(n>0){
        if(n>=1000){
            n-=1000
            r+='M'
        }         
        else if(n>=900){
            n-=900
            r+='CM'
        }       
        else if(n>=500){
            n-=500
            r+='D'
        } 
        else if(n>=400){
            n-=400
            r+='CD'
        } 
        else if(n>=100){
            n-=100
            r+='C'
        } 
        else if(n>=90){
            n-=90
            r+='XC'
        } 
        else if(n>=50){
            n-=50
            r+='L'
        } 
        else if(n>=40){
            n-=40
            r+='XL'
        } 
        else if(n>=10){
            n-=10
            r+='X'
        } 
        else if(n==9){
            n-=9
            r+='IX'
        } 
        else if(n>=5){
            n-=5
            r+='V'
        } 
        else if(n==4){
            n-=4
            r+='IV'
        } 
        else{
            n-=1
            r+='I'
        } 
    }
    return r
}
console.log(convertToRoman(2946));