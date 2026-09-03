const array = [1,2,3,2,4,5];


const maxSum = (arr,k) => {
    let windowSum = 0;
    
    for (let i = 0; i < k ; i++) {
        windowSum += arr[i]
    }
    
    let maxSum = windowSum;

    for(let i = k; i < arr.length ; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]

    if(windowSum > maxSum) {
        maxSum = windowSum
    }
    }

    return maxSum
}

console.log(maxSum(array,3))