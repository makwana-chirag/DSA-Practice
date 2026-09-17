// Problem : First Occurance in Sorted Array
// Explainnation : finding the first occurance of array, when there are duplicate exists in array
// Example Input : [1, 2, 2, 2, 4, 5, 7]; , Target : 2
// Output : 1
// Note : none 
// Approach : Basic Binary Search 

const arr = [1, 2, 2, 2, 4, 5, 7];

const findingFirstOccurance = (arr,target) => {
   
    let ans = -1
    let left = 0
    let right = arr.length -1

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
        if(target > arr[mid] ) {
          left = mid + 1;
        } else  if (target < arr[mid]) {
          right = mid -1;
        } else if (target === arr[mid]) {
          ans = mid 
          right = mid -1
        } 
     }

    return ans

}


console.log(findingFirstOccurance(arr,2))