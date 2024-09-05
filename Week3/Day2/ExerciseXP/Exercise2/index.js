const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length
const myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

const indexOfBigBangTheory = myWatchedSeries.indexOf("the big bang theory");
if (indexOfBigBangTheory !== -1) {
    myWatchedSeries[indexOfBigBangTheory] = "friends";
}
myWatchedSeries.push("stranger things");
myWatchedSeries.unshift("breaking bad");

const indexOfBlackMirror = myWatchedSeries.indexOf("black mirror");
if (indexOfBlackMirror !== -1) {
    myWatchedSeries.splice(indexOfBlackMirror, 1);
}

const indexOfMoneyHeist = myWatchedSeries.indexOf("money heist");
if (indexOfMoneyHeist !== -1) {
    console.log(myWatchedSeries[indexOfMoneyHeist][2])
}

console.log(myWatchedSeries);