// Problem : simple binary search algorithm
// Explainnation : finding target value index in provided array with binary search algoritham
// Example Input : [1, 3, 5, 7, 9, 11, 15]; // Target : 9
// Output : 4
// Note : none
// Approach : Basic Binary Search

const Array = [1, 3, 5, 7, 9, 11, 15];

const binarySearch = (arr,target) => {

    let right = arr.length -1;
    let left = 0;
    
    while ( right >= left) {
        let mid = Math.floor((left + right) / 2)
    if(target > arr[mid]){
        left = mid + 1;
    }else if (target < arr[mid]) {
        right = mid -1;
    } else {
                return `value found on index : ${mid} `

    }
    }

    return -1
}

console.log(binarySearch(Array,9))