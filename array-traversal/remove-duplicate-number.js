const array = [1,2,3,4,2,3,1,5,6,7];


const removeDuplicates = (arr) => {

const processed = [];
const duplicate = [];
const unique = [];
for (let i = 0 ; i < arr.length ; i++) {
    let found = false;

    for (let j = 0 ; j < processed.length ; j++) {
        if(processed[j].value === arr[i]){
            processed[j].count++
            found = true;
        }
    }

    if(!found) {
        processed.push({value:arr[i], count:1})
    }
}

for (let a = 0 ; a < processed.length ; a++) {
    if(processed[a].count > 1) {
        duplicate.push(processed[a])
    } else {
        unique.push(processed[a])
    }
}

return duplicate
}



console.log(removeDuplicates(array));