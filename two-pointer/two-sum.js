// Problem : Two Sum
// Explainnation : return the indexs of two values which sum should be the target value which is provided
// Example Input : [1,2,4,5,6,3] , Target : 8
// Output : [1,4]
// Note : none 
// Approach : Two Pointer



const array = [1,2,4,5,6,3];

const twoSum = (arr, target) => {

    for (let i = 0 ; i < arr.length ; i++ ) {

        for (let j = i+1 ; j < arr.length ; j++) {
            if( arr[i] + arr[j] === target)
                {
                  return `${j}-${i}`;  
                } 
        }

    }
return [-1,-1]
}

console.log(twoSum(array,8))