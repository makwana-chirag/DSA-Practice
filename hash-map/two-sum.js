const array = [1,2,4,5,6,7,8,9];

const twoSumWithHashMap = (arr,target) => {

    const seen = new Map();

    for(let i = 0 ; i < arr.length ; i++) {
        const needed = target - arr[i]

        if(seen.has(needed))
            {
                return [seen.get(needed),i]
            }
            seen.set(arr[i],i)
        }
}

console.log(twoSumWithHashMap(array,8))