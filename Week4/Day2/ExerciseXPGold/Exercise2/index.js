function abbrevName(name) {
    let splitName = name.trim().split(" ");
    if (splitName.length > 1) {
        return `${splitName[0]} ${splitName[1].charAt(0)}.`;
    }
    return splitName[0];
}
console.log(abbrevName("Robin Singh")); // "Robin S."
