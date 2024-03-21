import React, { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=1e31e940b34b9de92c3a0afe8f933b38"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  const movies = { ...movieList };

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
      <p>{movie.title}</p>
    </div>
  );
}

export default Movie;
