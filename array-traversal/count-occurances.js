const array = [1,3,5,6,7,2,3,4];

// const occurancesCount = (arr) => {
//     const arrayCount = []
// for (let i = 0 ; i < arr.length ; i++) {
//    arrayCount.push({value: arr[i], count:1})
//     for ( let j = 0 ; j < arr.length ; j++) {
//         if(arrayCount[j].value == arr[i]) {
//            arrayCount.push({value: arrayCount[j].value, count : arrayCount[j].count += 1})
//         } else {
//             arrayCount.push({value : arr[i], count :1})
//         }
//     }
// }
// return arrayCount
// }

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