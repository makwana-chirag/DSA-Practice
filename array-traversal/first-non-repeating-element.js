const array = [1,2,3,1,2,3,4,5,5];

const nonRepeatingElement = (arr) => {
    const processed = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        let first = false;
        for (let j = 0; j < processed.length ; j++) {
            if (arr[i] == processed[j].value) {
                processed[j].count++
                first = true;
                break;
            }
            
        }
        if(!first) {
          processed.push({value:arr[i],count:1})
        }
    }

    for (let x = 0 ; x < processed.length ; x++) {
        if(processed[x].count == 1) {
            return processed[x].value
        }
    }

    return -1
}

console.log(nonRepeatingElement(array))