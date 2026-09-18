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

   

   }

   return -1
}

console.log(rotatorySorted(arr,4))