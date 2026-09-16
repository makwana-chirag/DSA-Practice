// Next Greater Element in Circular Array 
// Problem : we have to found next greater number for current element while knowing that array wrap around instaed of finishing on last element
// Example : [1,2,1]
// Output : [2,-1,2]
// Note : when no greater element found give -1 for that number

// using stack approach 
const array = [1,2,1];

const nextGreaterElementCircularArray = (arr) => {

    const answer = new Array(arr.length).fill(-1)

    const stack = [];
    
    // make loop twice 
    for ( let i = 0; i < arr.length * 2; i++) {
           const currentIndex = i % arr.length
           while(stack.length > 0 && arr[currentIndex] > arr[stack[stack.length -1]]) {
             
            answer[stack[stack.length -1]] = arr[currentIndex]

            stack.pop()
           }
           if(i < arr.length) {
               stack.push(currentIndex)
            }
    }
    return answer;
}

console.log(nextGreaterElementCircularArray(array))