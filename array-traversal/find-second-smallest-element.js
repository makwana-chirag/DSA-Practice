const array = [2,40,6,7,23,32,5];

const findSecondSmallestElement = (arr) => {

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0 ; i < arr.length ; i++) {

        if (arr[i] < smallest ) {
        secondSmallest = smallest;
        smallest = arr[i];
        } else if( arr[i] < secondSmallest && arr[i] !== smallest) {
              secondSmallest = arr[i]
        }
    };

    return secondSmallest;
};

console.log("Second Smallest Number",findSecondSmallestElement(array));