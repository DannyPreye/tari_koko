const person = {
    name: "Koko",
    email: "koko@mail.com",
    course: "web development",
    printDetails: function (something) {
        console.log(this);
        console.log(something + " " + this.name);
    },
    scores: [30, 59, 93],
};

const persons = [
    {
        name: "tari",
        email: "tari@mail.com",
        course: "web development",
        printDetails: function (something) {
            console.log(this);
            console.log(something + " " + this.name);
        },
        scores: [39, 54, 93],
    },
    {
        name: "Koko",
        email: "koko@mail.com",
        course: "web development",
        printDetails: function (something) {
            console.log(this);
            console.log(something + " " + this.name);
        },
        scores: [30, 59, 93],
    },
    {
        name: "james",
        email: "james@mail.com",
        course: "Graphics",
        printDetails: function (something) {
            console.log(this);
            console.log(something + " " + this.name);
        },
        scores: [30, 20, 88],
    },
];
python_jon = 10;
console.log(python);
// console.log(persons[0].scores[1]);

// function sayHi() {
//     console.log(this);
// }

// sayHi();

// person.printDetails();
// person.name = "Tari";
// person.courseDuration = "3 months";
// console.log(person["name"]);
// console.log(person.email);

// for (let key in person) {
//     console.log(person[key]);
// }

// const persons = [1, 3, 4, 5, 6, 7, 1, 2, 3];
// for (let x in persons) {
//     console.log(persons[x]);
// }

// for (let x of persons) {
//     console.log(x);
// }
// for (let key = 0; key < person; key++)
