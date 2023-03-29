let x = [ 'mario', 'stefania', 'luca', 'lee']
    let l = 0
    let n = 'a'
    for(let i=0; i=x.length-1; i++){
        if(x[i].length > l){
            l = (x[i].length)
            n = x[i]
        }
    }
    console.log(n)
    