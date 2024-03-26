import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard.jsx";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=1e31e940b34b9de92c3a0afe8f933b38";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=1e31e940b34b9de92c3a0afe8f933b38&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(API_SEARCH + term)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div className="App">
      <div className="search_nav">
        <div className="title">
          <h1>Movies...</h1>
        </div>

        <div>
          <form onSubmit={handleSearch}>
            <input onChange={(e) => setTerm(e.target.value)} />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
