const array = [1,3,5,6,3,2];

const isArraySorted = (arr) => {
    let sorted = true ;
    for (let i = 0 ; i < arr.length ; i++) {
        if(arr[i] < arr[i + 1]) {
         sorted = true
        } else {
            sorted = false
            return sorted
        }
    }
    return sorted
}

console.log(isArraySorted(array));