import React, { useEffect, useState } from "react";

function Movie() {
  const [movieList, setMovieList] = useState([]);
  //   const getMovie = () => {
  //     fetch(
  //       "https://api.themoviedb.org/3/discover/movie?api_key=1e31e940b34b9de92c3a0afe8f933b38"
  //     )
  //       .then((res) => res.json())
  //       .then((json) => setMovieList(json.results));
  //   };

  //   useEffect(() => {
  //     getMovie();
  //   }, []);

  //   console.log(movieList);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTMxZTk0MGIzNGI5ZGU5MmMzYTBhZmU4ZjkzM2IzOCIsInN1YiI6IjY1ZmEyOWQ1ZmZjOWRlMDE0YTVlYzllMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QcBSwSwS7IrqDrUyM7cIjiF5Gp5lyveIHSe_K-aBL1g",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=1e31e940b34b9de92c3a0afe8f933b38",
    options
  )
    .then((response) => response.json())
    .then((response) => setMovieList(response.results))
    .catch((err) => console.error(err));

  return (
    <div>
      {movieList.map((movie) => (
        <img
          style={{
            width: "300px",
            height: "250px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

export default Movie;
