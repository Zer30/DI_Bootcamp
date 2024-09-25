let sentence="This dinner is not that bad ! You cook well"
let wordNot=sentence.search("not");
let wordBad=sentence.search("bad");
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3));
}
else{
    console.log(sentence);
};
