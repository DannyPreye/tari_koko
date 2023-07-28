const API_KEY = "a9437d26869817948234e9003006b947";
const image_url = "https://image.tmdb.org/t/p/w500";

const detailsElement = document.getElementById("details");
const relatedMoviesElement = document.getElementById("related");

const params = location.href.split("?")[1].split("&");
const id = params[0].split("=")[1];
const mediaType = params[1].split("=")[1];
console.log(mediaType);

if (mediaType == "movie") {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((movie) => {
            console.log(movie);

            detailsElement.innerHTML = `
                <h1 class="text-[2rem] font-bold">
                    ${movie.title || movie.original_title}
                 </h1>
                 <img src="${image_url + movie.poster_path}" />
                 <div class="flex gap-5 mt-5">
                    <h2 class="font-bold "> Genres:</h2>
                    <div>
                        ${movie.genres.map(
                            (genre) => `<span> ${genre.name}</span>`
                        )}
                    </div>
                 </div>
                <div class="mt-8">
                    <h2 class="text-[1.7rem] font-bold"> Overview </h2>
                    <p>${movie.overview} </p>
                </div>
            `;
        });
} else {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
}
