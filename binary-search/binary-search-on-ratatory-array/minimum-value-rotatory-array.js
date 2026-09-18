// Problem : Find the Minimum In Roteted Sorted Array
// Explainnation : have to find minimum value in array with help of binary searching on roteted sorted array
// Example Input : [4, 5, 6, 7, 0, 1, 2];
// Output : 0
// Note : none
// Approach : Binary Search

const arr =  [4, 5, 6, 7, 0, 1, 2];

const minimumValueInRotetedSortedArray = (arr) => {

    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = Math.floor((left + right) / 2);

       if(arr[mid] > arr[right]) {
         left = mid + 1
       }else {
        right = mid;
       }
      
    }
    return arr[left]
}

console.log(minimumValueInRotetedSortedArray(arr))