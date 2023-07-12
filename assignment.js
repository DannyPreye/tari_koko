// function min(arrNum) {
//     const arrSort = arrNum.sort(function (a, b) {
//         return a - b;
//     });

//     return arrSort[0];
// }

// function max(arrNum) {
//     const arrSort = arrNum
//         .sort(function (a, b) {
//             return a - b;
//         })
//         .reverse();

//     return arrSort[0];
// }

// console.log(max([10, 30, 5, 11, 25]));

// "This is me" =>3

// function numOfWords(sentence) {
//     const wordArr = sentence.split(" ");
//     return wordArr.length;
// }

// console.log(numOfWords("This is a boy"));

// let initial = 0;

// while (initial <= 100) {
//     if (initial % 15 == 0) {
//         console.log("fizzbuzz");
//     } else if (initial % 3 == 0) {
//         console.log("fizz");
//     } else if (initial % 5 == 0) {
//         console.log("buzz");
//     } else {
//         console.log(initial);
//     }
//     initial++;
// }

// let students = ["Tari", "Koko", "Hilda", "John", "Doe"];

// for (let i = 0; i < students.length; i++) {
//     let newName = students[i].slice(0, 2).toUpperCase() + students[i].slice(2);

//     console.log(newName);
// }

// function palidrome(word) {
//     const wordArr = word.split("");
//     const reversedWord = wordArr.reverse().join("");

//     if (reversedWord === word) {
//         console.log("word is a palidrome");
//     } else {
//         console.log("word is not a palidrome");
//     }
// }

function palidrome(word) {
    // let length = word.length;
    let wordArr = word.split("");

    let emptyArr = [];

    for (let i = 0; i < word.length; i++) {
        emptyArr.push(wordArr.pop());
    }

    const reversedWord = emptyArr.join("");

    if (reversedWord === word) {
        console.log("word is a palidrome");
    } else {
        console.log("word is not a palidrome");
    }
}

// palidrome("Hello");
palidrome("racecar");
