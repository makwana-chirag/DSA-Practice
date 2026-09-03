// brute-force approach without stack 

const array = [2,5,4,10,8];

const nextGreaterBruteForce  = (arr) => {

    const processed = [];

    for ( let i = 0; i < arr.length ; i++) {
        for ( let j = i+1 ; j < arr.length ; j++) {
            if (arr[j] > arr[i]){
                processed.push(arr[j])
                break
            } 
            processed.push(-1)
        }
    }
}

console.log(nextGreaterBruteForce(array))