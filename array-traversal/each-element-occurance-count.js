const array = [2,3,5,2,3,1,5,3];

const eachElementOccuranceCount = (arr) => {

    const processed = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        let found = false;
        
        for (let j = 0 ; j < processed.length ; j ++) {
            if(processed[j].value == arr[i]) {
                processed[j].count++
                found = true;
                break;
            }
        }

        if (!found) {
            processed.push({value : arr[i], count :1})
        }
    }
    
    return processed;

}

console.log(eachElementOccuranceCount(array));