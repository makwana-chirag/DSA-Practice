const array = [1,3,5,2,32];

const findingIfElementExists = (arr,value) => {
    for (let i = 0 ; i < arr.length ; i++) {
      if(arr[i] === value) {
        return  true;
      }
    }

    return false;
}

console.log("Does element exists ? :", findingIfElementExists(array,2));