// brute-force approach without stack 

// const array = [2,5,4,10,8];

const nextGreaterBruteForce  = (arr) => {

    const processed = [];

    for ( let i = 0; i < arr.length ; i++) {
        for ( let j = i+1 ; j < arr.length ; j++) {
            if (arr[j] > arr[i]){
                processed.push(arr[j])
                break
            } 
            processed.push(-1)
        }
    }
}

// console.log(nextGreaterBruteForce(array))

// next greater element with stack (monotonic)

const array = [2,5,4,3,10];

const nextGreaterElement = (arr) => {

    const answer = new Array(arr.length).fill(-1);
    const stack = [];


    for (let i = 0; i < arr.length ; i++) {
        while(stack.length > 0 && arr[i] > arr[stack[stack.length -1]]){
             answer[stack[stack.length - 1]] = arr[i]
             stack.pop()
        }
        stack.push(i)
    }

    return answer;

}

console.log(nextGreaterElement(array))