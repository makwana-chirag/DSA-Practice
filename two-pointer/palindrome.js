const array = [1,2,3,2,1]; // true
const arraytwo = [1,2,3,2,3,2] // false 
const arraythree = ['r','a','c','e','c','a','r'];

const palidrome = (arr) => {

     let left = 0;
     let right = arr.length -1;

     while (left < right) {
        let leftVal = arr[left];
        let rightVal = arr[right];

        if (leftVal != rightVal) {
            return false 

        } else {
            left++
            right--
        }
     }
     return true
}

console.log(palidrome(arraythree))