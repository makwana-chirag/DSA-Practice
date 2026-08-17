const array = [1,2,3,4,5];

const indexOfElement = (array,value) => {

    for (let i = 0; i < array.length ; i++) {
        if(array[i] == value) {
            return i
        }
    }
}

console.log(indexOfElement(indexOfElement(array,2)));