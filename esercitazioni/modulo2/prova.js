function tri(n) {
    if (n <= 0) return
    else {
        let a = ''
        for (let i = 0; i < n; i++) {
            a += 'x'
        }
        return tri(n-1)+ console.log(a)
    }
}
tri(5)