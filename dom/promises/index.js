const root = document.getElementById("root");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (ress) {
        return ress.json();
    })
    .then((posts) => {
        console.log(posts);
        for (let post of posts) {
            const card = document.createElement("div");

            card.classList.add("post-card");
            card.innerHTML = `
                <h2>${post.title} </h2>
                <p>${post.body}</p>


            `;

            root.appendChild(card);
        }
    });
