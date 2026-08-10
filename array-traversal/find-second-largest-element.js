const array = [20, 20, 15];

const findSecondLargestElement = (arr) => {
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length ; i++)
{
    if (arr[i] > largest) {
       secondLargest = largest;
       largest = arr[i];
    } else {
        if (arr[i] > secondLargest && arr[i] !== largest )
        {
            secondLargest = arr[i];
        }
    }
}
return secondLargest;
}

console.log("Second Largest Element is ", findSecondLargestElement(array));
console.log("Hi",-Infinity);