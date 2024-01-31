function isPalindrome(s){
    return s == s.split('').reverse().join('');
}

let examplePalindrome = 'level'
console.log(isPalindrome(examplePalindrome));