const array = [1,3,5,6,7,2,3,4];

const occurancesCount = (arr,target) => {
      let occurance = 0;
    for (let i = 0 ; i < arr.length ; i ++){
        if(arr[i] == target) {
            occurance++;
        } 
    }

    return occurance;
}

console.log(occurancesCount(array,3))