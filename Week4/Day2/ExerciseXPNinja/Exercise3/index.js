function isPalindrome(str) {
    // Convert the string to lowercase
    const lowerStr = str.toLowerCase();
    
    // Initialize an empty string to build the reversed version
    let reversedStr = '';

    // Loop through the string backwards
    for (let i = lowerStr.length - 1; i >= 0; i--) {
        reversedStr += lowerStr[i]; // Append each character to the reversed string
    }

    // Check if the original string is the same as the reversed string
    return lowerStr === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("bob"));   // true
console.log(isPalindrome("hello")); // false
