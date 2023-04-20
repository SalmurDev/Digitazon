// scrivere una funzione chiamata anagrams che 
// data una parola e una lista di parole 
// ritorni un array formato dalle parole che sono anagrammi
// della parola data

// ad esempio con "ciao" e ["caio", "cio", "oiac", "bye"] ritorna 
// ["caio", "oiac"]

function getLetters(s) {
    let letters = new Map()
    for (let i = 0; i < s.length; i++) {
        if (letters.has(s.charAt(i))) letters.set(s.charAt(i), letters.get(s.charAt(i)) + 1)
        else letters.set(s.charAt(i), 1)
    }
    return letters
}

function anagrams(string, arr) {
    let result = []
    let letterList = getLetters(string);
    arr.forEach(el => {
        let elLetters = getLetters(el);
        let anagram = true
        if (letterList.size != elLetters.size) anagram = false
        elLetters.forEach(function(v, k){
            if (!(letterList.has(k) && (letterList.get(k) == elLetters.get(k)))) anagram = false
        })
        if (anagram == true) result.push(el)
    });
    return result
}

console.log(anagrams("ciao", ["caio", "cio", "oiac", "bye"]))
