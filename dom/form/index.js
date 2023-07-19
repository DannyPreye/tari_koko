const registrationForm = document.forms["registration"];
const username = registrationForm["username"];
const email = registrationForm["email"];
const password = registrationForm["password"];
const errorParagraph = document.getElementById("error");
const userError = document.getElementById("user-error");
const container = document.getElementById("container");
const date = registrationForm["date"];

container.style.height = "300px";
container.style.background = "red";
container.addEventListener("click", () => {
    console.log("xup");
});

document.getElementById("link").addEventListener("click", (e) => {
    e.stopPropagation();
});

date.addEventListener("change", (e) => {
    console.log(e.target.value);

    const date = new Date(e.target.value);

    const year = date.getFullYear();
    console.log(year);
});

username.addEventListener("change", (e) => {
    console.log(e);
    userError.innerHTML = "";
    if (!formatUsername(e.target.value)) {
        userError.innerHTML = "the username is not correct";
        e.target.style.borderColor = "red";
    }
});

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    errorParagraph.innerHTML = "";

    if (
        formatUsername(username.value) &&
        formatPassword(password.value) &&
        formatEmail(email.value)
    ) {
        console.log(
            `username is ${username.value} and password is ${password.value} with email ${email.value}`
        );
    } else {
        errorParagraph.innerHTML = "username or password is not correct";
        console.log("username or password is not correct");
    }
});

function formatUsername(username) {
    return /[a-zA-Z0-9]/.test(username);
}

const formatEmail = (email) => {
    return /([a-zA-Z0-9_.+-])@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]/.test(email);
};

const formatPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
};
