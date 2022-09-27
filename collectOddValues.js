function collectOddValues(arr) {


    let resultArr = []

    if(arr.length === 0) return resultArr

    if(arr[0] % 2 !== 0) {
        resultArr.push(arr[0])
    }

    resultArr = resultArr.concat(collectOddValues(arr.slice(1)))
    return resultArr
}

numArray = [1,2,3,4,5,6,7,8,9,10,11,12]


console.log(collectOddValues(numArray))