const array = [1,2,4,5,6];

const sumOfArray = (arr) => {

    let total = 0;
    for (let i = 0; i < arr.length ; i++) {
       
        // total = total + arr[i]
        total += arr[i]
    }
    return total;
};

console.log("Total :",sumOfArray(array))