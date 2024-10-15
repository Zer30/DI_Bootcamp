function capitalize(string) {
    let evenIndexCap = '';
    let oddIndexCap = '';

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            evenIndexCap += string[i].toUpperCase();  // Capitalize even index characters
            oddIndexCap += string[i];                 // Keep odd index characters lowercase
        } else {
            evenIndexCap += string[i];                // Keep even index characters lowercase
            oddIndexCap += string[i].toUpperCase();  // Capitalize odd index characters
        }
    }

    return [evenIndexCap, oddIndexCap];
}

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
