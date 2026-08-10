const array = [2,3,2,5,4];

const findingSmallestElement = (arr) => {

    let smallest = Infinity;

    for (let i = 0 ; i < arr.length ; i++) {
       if ( arr[i] < smallest) {
        smallest = arr[i]
       }
    }
   return smallest;

}


console.log("smallest number is :",findingSmallestElement(array) );
