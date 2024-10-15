function uniqueElements(array) {
    // Use a Set to store unique elements
    const uniqueSet = new Set(array);
    
    // Convert the Set back to an array
    return Array.from(uniqueSet);
}

// Example usage
const list1 = [1, 2, 3, 3, 3, 3, 4, 5];
const list2 = [1, 2, 3, 3, 3, 3, 4, 5];

const newList1 = uniqueElements(list1);
const newList2 = uniqueElements(list2);

console.log(newList1); // [1, 2, 3, 4, 5]
console.log(newList2); // [1, 2, 3, 4, 5]
