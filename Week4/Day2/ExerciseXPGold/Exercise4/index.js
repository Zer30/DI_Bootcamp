function isOmnipresent(arr, value) {
    return arr.every(subArray => subArray.includes(value));
}

const exampleArray = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];
console.log(isOmnipresent(exampleArray, 3)); // true
console.log(isOmnipresent(exampleArray, 4)); // false
