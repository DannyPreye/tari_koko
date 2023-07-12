class Student {
    static counter = 0;

    constructor(name, course, scores) {
        this.name = name;
        this.course = course;
        this.scores = scores;

        Student.counter++;
    }

    calculateScore() {
        let totalScore = 0;
        for (let i = 0; i < this.scores.length; i++) {
            totalScore += this.scores[i];
        }

        return totalScore;
    }

    calculateAverage() {
        let totalScore = this.calculateScore();
        let scoreLength = this.scores.length;

        return totalScore / scoreLength;
    }

    static sayHi() {
        console.log("Hello");
    }
}

class DigiStudent extends Student {
    constructor(name, course, score, duration) {
        super(name, course, score);
        this.duration = duration;
    }
}

const student1 = new Student("Tari", "Web development", [30, 96, 49]);
const student2 = new Student("KOKO", "Web development", [30, 96, 49]);
const student3 = new DigiStudent(
    "Tim",
    "Web development",
    [38, 96, 68],
    "3 months"
);

// console.log(
//     student1.name,
//     student2.course,
//     student2.scores,
//     student1.calculateScore(),
//     // this.calculateScore(),
//     student1.calculateAverage()
// );
// console.log(student2.name, student2.course, student2.scores);

// console.log(Student.counter);

// Student.sayHi();

console.log(
    student3.calculateScore(),
    student3.calculateAverage(),
    student3.name,
    student3.duration
);
