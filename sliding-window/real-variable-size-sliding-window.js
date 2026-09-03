// longest sub-array with sum <= target
const array = [2, 1, 5, 1, 3, 2];
const target = 7;

const longestSumArray = (arr,target) => {
    
    let left = 0;
    let windowSum = 0;
    let maxLength = 0;


    for ( let right = 0 ; right < arr.length ; right++) {
    // in below we are adding all the element sum to windowsum
      wndowSum += arr[right];

    // we are checking if total element value sum exceed then target then we remove the last element which in our case 
    // is element that has been pointed by left and once we remove it form window sum we increaes the left 
    // again this right loop take place which add next element and again we check if target exceed or not if not then do nothing if yes then 
    // move the left and remove the value from windowsum which is pointed by left befor moving forward
    // we are using while instead of if because if will only execute once but while will keep in removing element until total sum become less then target
    while (windowSum > target) {
        windowSum -= arr[left];
        left++;
    }
    
    const currentLength = right - left + 1;

    if (currentLength > maxLength) {
        maxLength = currentLength;
    }

       }
    

    return maxLength

}

console.log(longestSumArray(array,target)) 