const array = [1,2,3,4,1,3,4,1];

const filteringDuplicateCount = (arr) => {

    const process = [];
    const duplicate = [];

    for (let i = 0 ; i < arr.length ; i ++) {
        let found = false ;

         for(let j = 0 ; j < process.length ; j++) {
            if(process[j].value === arr[i]){
                process[j].count++
                found = true;
                break
            } 
         }

        if(!found) {
            process.push({value:arr[i], count:1})
        }

        
    }

    for (let z = 0 ; z < process.length ; z++) {
        if(process[z].count > 1) {
            duplicate.push(process[z].value)
        }
    }

    return duplicate;

}

console.log(filteringDuplicateCount(array))