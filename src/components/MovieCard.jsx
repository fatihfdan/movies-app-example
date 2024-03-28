import "./MovieCard.css";

function MovieCard({ poster_path, title, vote_average }) {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card">
      <div className="poster">
        <img src={API_IMG + poster_path} className="poster-img" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="vote">{vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
