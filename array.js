// const student =''

const students = ["Koko", "Tari", "Peter", 20, true, false];
const studentS2 = ["Koko", "Zainab", "Tari", "Peter"];
// console.log(students[0]);
// console.log(students);

const newVal = students[1].toUpperCase() + " " + students[2];

// console.log(newVal);

// console.log(students.length);

// console.log(students[students.length - 1]);
// console.log(students[Math.floor(students.length / 2) - 1]);
// console.log(students);

const newArr = students.slice(0, 3);

students.splice(0, 2);
// console.log(students);

// console.log(newArr);
// const newval = students.pop();

// console.log(newval);
// console.log(students);

// students.push(100);  20, true, false 20, true, false20, true, false

// console.log(students);

// students.shift();

// console.log(students 20, true, false);

const numbers = [2, 10, 11, 22, 18, 40, 78, 12, 5, 9];
// students.unshift("Doe");
// console.log(students);

// const newArr1 = studentS2.concat(students);

// console.log(newArr1.toString());
// console.log(newArr1);

// console.log(studentS2.sort());

// console.log(numbers.sort(sortNumbers));

const sortedNumber = numbers.sort(function (a, b) {
    return a - b;
});

function sortNumbers(a, b) {
    return b - a;
}

// console.log(studentS2.reverse());.

// console.log(sortedNumber);

// console.log(numbers.includes(11));

const str = "Thi is a string that we want to convert";
const strArr = str.split(" ");

const newStr = strArr.join("");

console.log(newStr);
