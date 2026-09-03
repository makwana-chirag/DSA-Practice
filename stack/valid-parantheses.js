const str = '([()])'

const validParanthesis = (val) => {

    const stack = [];

    for (let i = 0 ; i < val.length ; i ++) {
        if (val[i] === "("){
            stack.push(val[i])
        }
        if (val[i] === "["){
            stack.push(val[i])
        }
        if (val[i] === "<"){
            stack.push(val[i])
        }
        if (val[i] === "{"){
            stack.push(val[i])
        }
        if (val[i] === ")"){
            if(stack[stack.length -1] !== "(") {
                return false
            }
            stack.pop()
        }
        if (val[i] === "]"){
            if (stack[stack.length -1] !== "["){
                return false
            }
         stack.pop()
        }
        if (val[i] === ">"){
            if(stack[stack.length -1] !== "<") {
                return false
            }
         stack.pop()
        }
        if (val[i] === "}"){
            if(stack[stack.length -1] !== "{") {
                return false
            }
         stack.pop()
        }
    }

    if(stack.length == 0) {
        return true
    }
    return false

}

console.log(validParanthesis(str))