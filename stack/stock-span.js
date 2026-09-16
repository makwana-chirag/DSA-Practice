// Problem : Stock Span
// Explainnation : How many consecutives previous days prices were lessthen or equal to today's price
// Example Input : [100, 80, 60, 70, 60, 75, 85];
// Output : [1, 1, 1, 2, 1, 4, 6];
// Note : if no previous element lessthen or equal to then put 1
// Approach : using monotonic stack approach 

const prices = [100, 80, 60, 70, 60, 75, 85];

const stockSpan = (arr) => {

    const answer = new Array(arr.length).fill(-1)

    const stack = [];

    for( let i = 0 ; i < arr.length ; i++) 
    {
        while (stack.length > 0 && arr[stack[stack.length -1]] <= arr[i]) {
          stack.pop()

        }
         
        if(stack.length == 0) {
         answer[i] = i + 1
        }
        else {
            answer[i] = i - stack[stack.length -1]
        }
        stack.push(i)
    }
      
    return answer;
}

console.log(stockSpan(prices))