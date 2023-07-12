let name = "Tari";
let newWord = "Hello world world";
let sentence = "It's a boy \t\t\tthis is another text";
// console.log(sentence);

// console.log(newWord.length);

// METHODS OF THE STRING OBJECT

// slice Method
// let slice = newWord.slice(-2);
let slice = newWord.slice(2, 3);
// let substring = newWord.substring(0, 5);
let substr = newWord.substr(2, 3);

// let replace = newWord.replace(/world/gi, "Javascript");

// console.log(replace);

let toUpper = newWord.toUpperCase();
let toLower = newWord.toLowerCase();
// console.log(toUpper);
// console.log(toLower);

// mcdonald=>MCdonald
// tari=>TAri
// koko=>KOko

/*
    //  split into two section so that the first two char is in one section
    //  and the other is in another

    1. extract the first two characters of the word

    2. change case of step one to upperCase

    3. join step 2 to the remaining part of the text


*/

// function firstTwo(name) {
//     let step1 = name.slice(0, 2);
//     let step2 = step1.toUpperCase();
//     let step3 = name.slice(2);"
//     let step4 = step2 + step3;
//     return step4;
// }

// console.log(Math.floor(5 / 2));

// console.log(
//     firstTwo("mcdonalds"),
//     firstTwo("ds"),
//     firstTwo("Tari"),
//     firstTwo("daniel")
// );

// function middleTwo(name) {
//     let middle = Math.floor(name.length / 2) - 1;
//     console.log(middle);
//     let firstTwo = name.slice(0, middle);
//     let middleTwo = name.substr(middle, 2);
//     let from = middle + 2;
//     let remaining = name.slice(from);

//     return firstTwo + middleTwo.toUpperCase() + remaining;
// }

// console.log(middleTwo("Lewandowski"));

// const concat = newWord.concat(" ", name, " ", sentence);

// console.log(concat);

// const numString = "123456789112";

// const padStart = numString.padStart(21, "my name is john");

// console.log(padStart);

// const include = newWord.includes("Hello");
// const indexOf = newWord.indexOf("world", 8);
// const lastIndexOf = newWord.lastIndexOf("world");
let search = newWord.search("world");
let trim = newWord.trim();
let charAt = newWord.charAt(4);
let split = newWord.split(" ");
// console.log(split);

// ("This is a sentence, this is the quote 'This place is a dream'")=>"This place is a dream"

//

function middleFour(numString) {
    // const middle = Math.floor(numString.length / 2) - 1;
    const middle4 = numString.substr(4, 4);
    // const padStart = middle4.padStart(8, "*");
    // const padEnd = padStart.padEnd(12, "*");
    const final =
        "****" +
        // const padEnd =

        console.log(padEnd);
}

// middleFour("123456789012");

function quoteExtractor(sentence) {
    const openingQuote = sentence.indexOf("'");
    const endQuote = sentence.lastIndexOf("'");
    const quote = sentence.slice(openingQuote, endQuote + 1);
    return quote;
}
console.log(
    quoteExtractor(
        "This is a sentence, this is the quote 'This place is a dream'"
    )
);
