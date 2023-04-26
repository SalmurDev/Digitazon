// scrivere una funzione chiamata findLongestSubstring
// che prende in ingresso una stringa
// la funzione deve ritornare la stringa piu' lunga che non ha 
// ripetizioni

// ad esempio per "abcabcbb" deve ritornare "abc"
// ad esempio per "bbbbb" deve ritornare "b"
// ad esempio per "pwwkew" deve ritornare "wke"


function findLongestSubstring(s) {
    let parola = ''
    let res = ''
    for (let i = 0; i < s.length; i++) {
        const lettera = s[i];
        if (parola.includes(lettera)) {
            if (parola.length > res.length) {
                res = parola
            }
            parola = parola.substring(parola.indexOf(lettera)+1, i)
        } else {
            parola += lettera
        }
    }
    if (parola.length > res.length) {
        res = parola
    }
    return res
}
console.log(findLongestSubstring('abcdecfghil'));
console.log(findLongestSubstring('abcabcbb'));
console.log(findLongestSubstring('bbbb'));