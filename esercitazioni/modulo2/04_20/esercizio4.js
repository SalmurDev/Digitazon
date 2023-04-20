function tri(n) {
    for (let i = 1; i < 2*n; i++) {
        let a = ''
        for (let j = 0; j < n-Math.abs(n - i) ; j++) {
            a += 'x'
        }
        console.log(a)
    }
}
tri(4)