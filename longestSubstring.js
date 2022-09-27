function findLongestSubstring(string) {

    let longestCounter = 0
    let seen = {}
    let start = 0

    for (let i = 0; i < string.length; i++) {

        let char = string[i]
        if (seen[char]) {
            start = Math.max(start, seen[char])
        }

        longestCounter = Math.max(longestCounter, i - start + 1)

        seen[char] = i + 1

    }
    return longestCounter

}


console.log(findLongestSubstring('asdfiiiiiii'))