const array = [1,2,3,4,5,60,7,8,9,10];

const findLargetNumber = (arr) => {

    let largest = 0
    
    for (let i = 0; i < arr.length; i++)
{
 if (largest < arr[i]) {
    largest = arr[i];
 } 
}
return largest
}

console.log("Largest Number is", findLargetNumber(array));