function isPalindrome(str) {


    function reverse(str) {
        if (str.length <= 1) return str

        return reverse(str.slice(1)) + str[0]
    }

    if (str === reverse(str)) {
        return true
    } else return false
}

console.log(isPalindrome('tacocat'))