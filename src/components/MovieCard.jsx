    import { getFavorites, saveFavorites } from "../utils/localStorage";

    const imageBase = "https://image.tmdb.org/t/p/w500";

    function MovieCard({ movie }) {

    const addFavorite = () => {
        const favorites = getFavorites();
        const exists = favorites.find(f => f.id === movie.id);

        if (!exists) {
        favorites.push(movie);
        saveFavorites(favorites);
        }
    };

    return (
        <div className="movie-card">

        <img
            src={`${imageBase}${movie.poster_path}`}
            alt={movie.title}
        />

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.slice(0,4)}</p>
            <p>⭐ {movie.vote_average}</p>
            <button onClick={addFavorite}>❤️ Favorite</button>
        </div>

        </div>
    );
    }

    export default MovieCard;