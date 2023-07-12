// try {
//     console.log("hello");
//     console.log(name);
//     let name;
// } catch (e) {
//     console.log("there's an errror");
// } finally {

// }

function divideTwo(num1, num2) {
    try {
        if (num1 <= 0) {
            throw new Error("Sorry we cannot divide by zero");
        }
        let result = num1 / 5;
        return result;
    } catch (error) {
        console.log(error);
    }
}

console.log(divideTwo(10, 2));
