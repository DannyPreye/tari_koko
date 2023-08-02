const moviesElement = document.getElementById("movies");
const image_url = "https://image.tmdb.org/t/p/w500";

const moviesData = JSON.parse(localStorage.getItem("bookmarkmovies"));

moviesData.forEach((movie) => {
    const movieCard = document.createElement("div");

    movieCard.href = `/detail.html?id=${movie.id}&media_type=${
        movie.media_type || "movie"
    }`;

    movieCard.className =
        "w-full max-w-[350px] flex-shrink-0 bg-blue-300 shadow-md rounded-[12px]";

    movieCard.innerHTML = `
            <img src="${
                image_url + (movie.backdrop_path || movie.poster_path)
            }" />
            <div class="px-4 pb-4">
                <h3 class="font-bold text-[1.3rem] text-center">
                <a class="hover:text-blue-600" href="/detail.html?id=${
                    movie.id
                }&media_type=${movie.media_type || "movie"}"> ${
        movie.title || movie.original_title || movie.name
    } </a>
                </h3>
                <div class="flex items-center justify-between">
                    <span> Language: ${
                        movie.language || movie.original_language
                    } </span>
                    <span> Release Date: ${movie.release_date} </span>
                </div>
                <button class="remove" id="remove">Remove Bookmark </button>
            </div>
            `;

    moviesElement.append(movieCard);
});
const removeButtons = document.querySelectorAll(".remove");

for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", () => {
        removeBookmark(moviesData[i].id);
    });
}

const removeBookmark = (movie_id) => {
    const moviesData = JSON.parse(localStorage.getItem("bookmarkmovies"));
    const removed = moviesData.filter((movie) => movie.id !== movie_id);

    localStorage.setItem("bookmarkmovies", JSON.stringify(removed));

    location.reload();
};

const getBookmark = () => {
    const bookmarkElement = document.querySelector("#menu-bookmark span");
    const moviesFromLS = JSON.parse(localStorage.getItem("bookmarkmovies"));

    bookmarkElement.innerHTML = moviesFromLS.length;
    bookmarkElement.className =
        "absolute -left-3 -top-3 block  rounded-full bg-blue-900";
    // bookmarkElement.style.aspectRatio = "1/1";
};

getBookmark();
