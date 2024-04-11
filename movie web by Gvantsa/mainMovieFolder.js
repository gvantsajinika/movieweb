const baseURL = "https://image.tmdb.org/t/p/original";
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmE2ZWUxM2M2ZmY4Njg0NDY2YzcxNmQ4N2UwMjU0YyIsInN1YiI6IjVmODBiMjJhZDhlMTVhMDAzYmU1MjBiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1_UrUFGla37RD3sg_Ws6qCbDI3ufA_P2FCgstdwevY",
  },
};
const getUpcomigMovies = async () => {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options
  );
  console.log(resp);
  return resp.data;
};

$(".movie-slider").slick({
  dots: true,
  // fade: true,
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
});
getUpcomigMovies().then((movieList) => {
  let allMovies = "";
  movieList.results.forEach((movie) => {
    allMovies += `
      <article class="movie">
      <header>
      <h3>${movie.original_title}</h3>
      <div class="movie-date">${movie.release_date}</div>
      <div class="popularity-language">
      <h3>${movie.original_language}<h3>
      <div>   ${movie.popularity}</div>
      </div>
      </header>
      
      <figure>
    <img src="${baseURL + movie.poster_path}" alt="">
      </figure>
      </article>
      `;
  });
  $(".upcoming-movies-container").html(allMovies);
});
//   movieList.results.array.forEach((movie) => {
//     const article = document.createElement("article");
//     const figure = document.createElement("figure");
//     const img = document.createElement("img");
//     const h2 = document.createElement("h2");
//   });
// });

// const upcomingMoviesSection = document.createElement("section");
// upcomingMoviesSection.classList.add("upcoming-movies-section");
// data.results.forEach((movie) => {
//   const moviesSection = document.createElement("section");
//   moviesSection.classList.add("movies-section");
//   upcomingMoviesSection.appendChild(moviesSection);

//   const moviePoster = document.createElement("img");
//   moviePoster.textContent = movie.backdrop_path;
//   moviePoster.classList.add("movie-poster");
//   upcomingMoviesSection.appendChild(moviePoster);
//   moviesSection.appendChild(moviePoster);

//   const movieTitle = document.createElement("p");
//   movieTitle.textContent = movie.title;
//   movieTitle.classList.add("movies-title");
//   moviesSection.appendChild(movieTitle);

//   console.log(movie);
// });

// document.body.appendChild(upcomingMoviesSection); // Append the created div to the body or any other container element
// document
//   .getElementById("upcoming-movies-section")
//   .appendChild(upcomingMoviesSection); // Append the created div to the container element with id "upcoming-movies-section"
