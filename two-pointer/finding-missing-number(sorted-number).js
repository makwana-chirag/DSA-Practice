// finding missing number in array 

const array = [1,2,3,4,5,6];

const missingNumber = (arr) => {
    
    let left = 0;
    let right = 1

    if (arr[0] !== 1) {
        return 1
    }
    while (right < arr.length) {
        let leftValue = arr[left];
        let rightValue = arr[right];
 

        if (rightValue - leftValue === 1) {

        left++;
        right++
        } else {
            return leftValue + 1
        }

    }
    return arr[arr.length - 1] + 1;
    
}

console.log(missingNumber(array));