function print(n){
    if(n<=0)return 0
    else return `${print(n-1)}${n}`
}
console.log(print(5))