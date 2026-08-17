const array = [1,2,3];
// output we want : [3,2,1]

const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length -1; 
    
    while (left < right)
    {
        let leftVal = arr[left]
        let rightVal = arr[right]

        arr[left] = rightVal
        arr[right] = leftVal

        left++
        right--
    }

    return arr
}

console.log(reverseArray(array))