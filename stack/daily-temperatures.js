// Problem : we have to found how many days until next greter temperature 
// Example : [73, 74, 75, 71, 69, 72, 76, 73]
// Output : [1,1,4,2,1,1,0,0]

// using stack approach 
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

const distanceBtwTems = (tem) => {

    const answer = new Array(tem.length).fill(0)

    const stack = [];
    
    for ( let i = 0; i < tem.length ; i++) {
        while(stack.length > 0 && tem[i] > tem[stack[stack.length -1]] ) {
                   
            answer[stack[stack.length - 1]] = i - stack[stack.length -1]
             stack.pop() 
        }
        stack.push(i)
    }
    return answer;
}

console.log(distanceBtwTems(temperatures))