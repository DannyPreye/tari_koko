const movieElement = document.getElementById("movies");
const tvSeriesElement = document.getElementById("tv-series");
const API_KEY = "a9437d26869817948234e9003006b947";
const image_url = "https://image.tmdb.org/t/p/w500";
const allSectionElement = document.getElementById("all-section");

const form = document.forms["search"];
const searchInput = form["search-input"];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        const movies = data.results;

        console.log(movies);

        for (let movie of movies) {
            const movieCard = document.createElement("a");

            movieCard.href = `/detail.html?id=${movie.id}&media_type=movie`;

            movieCard.className =
                "w-full max-w-[350px] flex-shrink-0 bg-blue-300 shadow-md rounded-[12px]";

            movieCard.innerHTML = `
            <img src="${image_url + movie.backdrop_path}" />
            <div class="px-4 pb-4">
                <h3 class="font-bold text-[1.3rem] text-center">${
                    movie.title || movie.original_title
                }
                </h3>
                <div class="flex items-center justify-between">
                    <span> Language: ${
                        movie.language || movie.original_language
                    } </span>
                    <span> Release Date: ${movie.release_date} </span>
                </div>
            </div>
            `;

            movieElement.append(movieCard);
        }
    });

fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
        const series = data.results;

        console.log(series);

        for (let serie of series) {
            const serieCard = document.createElement("a");

            serieCard.href = `/detail.html?id=${serie.id}&media_type=${serie.media_type}`;

            serieCard.className =
                "w-full max-w-[350px] flex-shrink-0 bg-blue-300 shadow-md rounded-[12px]";

            serieCard.innerHTML = `
            <img src="${image_url + serie.backdrop_path}" />
            <div class="px-4 pb-4">
                <h3 class="font-bold text-[1.3rem] text-center">${
                    serie.title || serie.original_name
                }
                </h3>
                <div class="flex items-center justify-between">
                    <span> Language: ${
                        serie.language || serie.original_language
                    } </span>
                    <span> Release Date: ${serie.release_date} </span>
                </div>
            </div>
            `;

            tvSeriesElement.append(serieCard);
        }
    });

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${searchInput.value}&page=1&api_key=${API_KEY}`
    );
    const data = await res.json();
    const movies = data.results;
    // Empty the contain first
    allSectionElement.innerHTML = "";

    console.log("search", movies);
    allSectionElement.className =
        "flex gap-4 flex-wrap mt-4 justify-start items-stretch";

    movies.forEach((movie) => {
        const movieCard = document.createElement("a");

        movieCard.href = `/detail.html?id=${movie.id}&media_type=${movie.media_type}`;

        movieCard.className =
            "w-full max-w-[350px] flex-shrink-0 bg-blue-300 shadow-md rounded-[12px]";

        movieCard.innerHTML = `
            <img src="${
                image_url + (movie.backdrop_path || movie.poster_path)
            }" />
            <div class="px-4 pb-4">
                <h3 class="font-bold text-[1.3rem] text-center">${
                    movie.title || movie.original_title || movie.name
                }
                </h3>
                <div class="flex items-center justify-between">
                    <span> Language: ${
                        movie.language || movie.original_language
                    } </span>
                    <span> Release Date: ${movie.release_date} </span>
                </div>
            </div>
            `;

        allSectionElement.append(movieCard);
    });
});

const getBookmark = () => {
    const bookmarkElement = document.querySelector("#menu-bookmark span");
    const moviesFromLS = JSON.parse(localStorage.getItem("bookmarkmovies"));

    bookmarkElement.innerHTML = moviesFromLS.length;
    bookmarkElement.className =
        "absolute -left-3 -top-3 block  rounded-full bg-blue-900";
    // bookmarkElement.style.aspectRatio = "1/1";
};

getBookmark();
