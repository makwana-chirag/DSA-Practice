const array = [0,2,3,0,2];

const moveZeroToEnd = (arr) => {

    let left = 0;
    let right = 0;

    // Move non-zero values forward
    while (right < arr.length) {

        let leftVal = arr[left];
        let rightVal = arr[right];

        if (rightVal !== 0) {
            arr[left] = rightVal;
            arr[right] = leftVal;
            left++;
        }

        right++;
    }

    // Fill remaining positions with zero
    while (left < arr.length) {
        arr[left] = 0;
        left++;
    }

    return arr;
};

console.log(moveZeroToEnd(array));