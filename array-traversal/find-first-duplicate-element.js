const array = [1,2,3,4,2,3,1];


const firstDuplicate = (arr) => {

const processed = [];

for (let i = 0 ; i < arr.length ; i++)
{
    
    for (let j = 0 ; j < processed.length ; j++) {
         if(processed[j] === arr[i])
            return arr[i]
     }

        processed.push(arr[i])
}

return -1
}



console.log(firstDuplicate(array));