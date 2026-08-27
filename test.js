const array = [1,2,3,4,1,2,3];

const nonRepeatedElement = (arr) => {

    const count = new Map();

    for(let i = 0 ; i < arr.length ; i++) {
        if(count.has(arr[i])) {
            const previousCount =count.get(arr[i]) ;
            count.set(arr[i] , previousCount+1)

        } else {
            count.set(arr[i], 1)
        }
    }


    for ( [value, occurance] of count) {
        if (occurance == 1) {
            return value;
        }
    }

    return -1
}

console.log(nonRepeatedElement(array));