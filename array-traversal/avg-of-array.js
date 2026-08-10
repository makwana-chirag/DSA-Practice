const array = [1,3,5,6,7,8];

const avgArray = (arr) => {
    let total = 0;  
  
    for (let i = 0 ; i < arr.length ; i++) {
        total+= arr[i];
    }

    return total / arr.length;

}

console.log("avg :", avgArray(array))