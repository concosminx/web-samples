//find the longest word
function longestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(longestWord("This is my life now"));
console.log(longestWord("I will search another solution for this problem"));