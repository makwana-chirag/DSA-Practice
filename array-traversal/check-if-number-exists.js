const array = [1,3,4,5,2,5];

const findNumberExists = (arr,number) => {

    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] == number) {
            return "exists"
        }
    }
    return "don't exists"
}

console.log(findNumberExists(array,3))