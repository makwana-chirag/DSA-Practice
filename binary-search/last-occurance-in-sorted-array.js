// Problem : Last Occurance in Sorted Array
// Explainnation : finding the last occurance of target value in sorted array using binary search
// Example Input : [1, 2, 2, 2, 4, 5, 7]; , Target : 2
// Output : 3
// Note : none
// Approach : Binary Search 

const arr = [1,2,2,2,4,5,7];

const lastOccurance = (arr, target) => {
   
    let right = arr.length - 1;
    let left = 0;
    let ans = -1;

    while( right >= left) {
        let mid = Math.floor((left + right) / 2)

        if (target > arr[mid]) {
           left = mid + 1
        } else if (target < arr[mid]) {
            right = mid - 1
        } else if (target === arr[mid]) {
            ans = mid 
            left = left + 1
        }
    }

return ans
}

console.log(lastOccurance(arr,2))