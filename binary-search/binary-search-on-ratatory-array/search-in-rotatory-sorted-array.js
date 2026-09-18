// Problem : Search in Rotatory Sorted Array
// Explainnation : searching using binary search when entire array is no-longer sorted
// Example Input : [4, 5, 6, 7, 0, 1, 2];; , Target : 4
// Output : 0
// Note : At any point, at least one half of your current search range will still be sorted.
// Approach : Binary Search

const arr = [4, 5, 6, 7, 0, 1, 2]; 

const rotatorySorted = (arr,target) => {
   let left = 0;
   let right = arr.length - 1;

   while(left <= right){
   
    let mid = Math.floor((left + right) / 2)
          

    if(target === arr[mid]){
      return mid
    }
    // left half is sorted
    else if (arr[left] <= arr[mid]) {
      // is target value is inside the sorted left side 
      if (target >= arr[left] && target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    // right half is sorted (also just for understanding below condition we can just add else if left is not sorted means right must be sorted)
    else if (arr[right] >= arr[mid]){

       // is target value is inside the sorted right side
       if (target <= arr[right] && target > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
      }
         

   }

   return -1
}

console.log(rotatorySorted(arr,4))