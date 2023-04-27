function binarySearch(arr,n) {
    
    let end = arr.length-1
    let start = 0 

    while ( start <= end ) {
        let half = Math.floor((end+start)/2)  
        if (n==arr[half]) {
            return half
        }
        if (n>arr[half]){
            start = half+1  //arrotondando per difetto si deve aggiustare il caso in cui ci siano solo due elementi.
        } else {
            end = half-1
        }  
    }
    return -1 
}

console.log(binarySearch([1,2,3,5,6],7));