// Dynamic Size Sliding Window
// or Variable Size Sliding Window

const array = [1, 1, 0, 1, 1, 1, 0, 1];

const consecutiveSequence = (arr) => {
    
    let currentWindowSize = 0;
    let maxSumSequence = 0

    for (let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === 1) {
            currentWindowSize++

            if(currentWindowSize > maxSumSequence) {
                maxSumSequence = currentWindowSize
            }

        } else {
            currentWindowSize = 0
        }
    }


    return maxSumSequence

}

console.log(consecutiveSequence(array)) 