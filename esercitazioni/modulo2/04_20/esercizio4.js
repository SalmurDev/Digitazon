// primo tentativo

// function tri(n) {
//     for (let i = 1; i < 2*n; i++) {
//         let a = ''
//         for (let j = 0; j < n-Math.abs(n - i) ; j++) {
//             a += 'x'
//         }
//         console.log(a)
//     }
// }
// tri(4)

// secondo tentativo

// function triR(n) {
//     if (n <= 0) return ;
// else {
//         let a = '';
//         for (let i = 0; i < n; i++) {
//             a += 'x';
//         }
//         return console.log(a)+ triR(n-1);
//     }
// }
// function tri(n) {
//     if (n <= 0) return;
//     else {
//         let a = '';
//         for (let i = 0; i < n; i++) {
//             a += 'x';
//         }
//         return tri(n-1)+ console.log(a);
//     }
// }
// function pyramid(n){
//   return tri (n) + triR(n-1);
//   }
// pyramid(5);

// terzo tentativo

function triR(n) {
    if (n <= 0) return
    else return console.log('x'.repeat(n)) + triR(n - 1)
}
function tri(n) {
    if (n <= 0) return;
    else return tri(n - 1) + console.log('x'.repeat(n))
}
function pyramid(n) {
    return tri(n) + triR(n - 1)
}
pyramid(7);