const array = [1,2,4,4,5,6];

const findingEvenNumbers = (arr) => {
    let totalEvenNumbers = 0;
    for(let i = 0 ; i < arr.length ; i++){
     if (arr[i] % 2 === 0 ) {
        totalEvenNumbers++;
     }
    }

    return totalEvenNumbers;
};

console.log("Total even elements",findingEvenNumbers(array));