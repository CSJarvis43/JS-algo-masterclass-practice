function minSubArrayLen(arr, sum){

    let total = 0
    let start = 0
    let end = 0
    let minLen = Infinity

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end]
            end++
        }

        else if (total >= sum) {
            minLen = Math.min(minLen, end - start)
            total -= arr[start]
            start++
        }

        else{ break }
    }

    return minLen === Infinity ? 0 : minLen

}

console.log(minSubArrayLen([1, 2, 3, 3, 2,4,5,6,6,7,4,2], 17))