function isUpper(char){
    if(typeof char != 'string') return 'il dato in ingresso non è una stringa'
    if(char.length != 1) return 'la stringa non ha lunghezza 1'
    if(char.toUpperCase() == char && char.toLowerCase() == char) return 'la stringa non è una lettera'
    if(char.toUpperCase() == char) return 'la lettera  è maiuscola'
    else return 'la lettera è minuscola'
}

console.log(isUpper(true));
console.log(isUpper('Giovanni'));
console.log(isUpper('a'));
console.log(isUpper('B'));
console.log(isUpper('0'));
console.log(isUpper('&'));