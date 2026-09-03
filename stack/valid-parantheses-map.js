const str = '<[{()}]>';

const validMapParantheses = (str) => {

    const stack = [];

const pair = new Map([
    [")", "("],
    [">", "<"],
    ["}", "{"],
    ["]", "["]
]);

    for ( let i = 0 ; i < str.length ; i++) {
        if( str[i]=== "<" ||  str[i]=== "(" || str[i]=== "{" || str[i]=== "[") {
            stack.push(str[i])
        }  else {
            const expected = pair.get(str[i])
            if ( stack[stack.length -1] !== expected) {
                return false
            } else {
                stack.pop()
            }
        } 
    } 

    if(stack.length === 0) {
        return true
    }

    return false
}

console.log(validMapParantheses(str))