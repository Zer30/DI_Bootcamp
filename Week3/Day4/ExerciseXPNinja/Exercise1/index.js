let birthYear1 = (prompt("Enter the birth year of the first person:"));
let birthYear2 = (prompt("Enter the birth year of the second person:"));

let older = Math.min(birthYear1, birthYear2);
let younger = Math.max(birthYear1, birthYear2);

let ageDifference = younger - older;

let halfAgeYear = younger + ageDifference;

alert("The younger person will be half the age of the older person in the year: " + halfAgeYear);
