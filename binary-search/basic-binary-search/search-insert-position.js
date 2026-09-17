// Problem : Search Insert Position 
// Explainnation : given the sorted array, return the index where target exist if it didn't exist at that place then return the index where target value should be inserted
// Example Input : [1, 3, 5, 6]; , Target : 2
// Output : 1
// Note : none
// Approach :Basic Binary Search 

const arr = [1,3,5,6,7]

const searchInsertPosition = (arr,target) => {

    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let mid = Math.floor((left + right) / 2)
      
        if(target > arr[mid]){
            left = mid + 1
        }
        else if(target < arr[mid]){
            right = mid - 1
        } else if (target === arr[mid]){
            return `target value index : ${mid}`
        }         
    }

    return left
}

console.log(searchInsertPosition(arr,2))
