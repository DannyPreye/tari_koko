const root = document.getElementById("root");

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(function (ress) {
//         return ress.json();
//     })
//     .then((posts) => {
//         console.log(posts);
//         root.innerHTML = "";
//         for (let post of posts) {
//             const card = document.createElement("div");
//             card.classList.add("post-card");
//             card.innerHTML = `
//                 <h2>${post.title} </h2>
//                 <p>${post.body}</p>
//             `;
//             root.appendChild(card);
//         }
//     })
//     .catch((error) => {
//         root.innerHTML = "";
//         root.innerHTML = "an error occured while loading the page";
//     });

// async function fetchData() {

// }

const fetchData = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        root.innerHTML = "";

        posts.forEach((post, index, array) => {
            const card = document.createElement("div");
            card.classList.add("post-card");
            card.innerHTML = `
                            <h2>${post.title}, ${index} </h2>
                            <p>${post.body}</p>
                        `;
            root.appendChild(card);
        });
        // for (let post of posts) {
        //     const card = document.createElement("div");
        //     card.classList.add("post-card");
        //     card.innerHTML = `
        //                 <h2>${post.title} </h2>
        //                 <p>${post.body}</p>
        //             `;
        //     root.appendChild(card);
        // }
    } catch (error) {
        root.innerHTML = "";
        root.innerHTML = "an error occured while loading the page";
    }
};

fetchData();

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// num.forEach((elem, index, array) => console.log(array));

// const addNums = num.map((elem) => {
//     return elem + 1;
// });

// console.log(addNums);

const evenNums = num.filter((elem) => elem % 2 == 0);

const find = num.find((elem) => elem > 8);
const every = num.every((elem) => elem > 1);

// console.log(every);

const sum = num.reduce((total, elem, index, array) => {
    return (total += elem);
}, 0);

console.log(sum);
