    import { useEffect, useState } from "react";
    import { getFavorites } from "../utils/localStorage";
    import MovieCard from "../components/MovieCard";
    import { Link } from "react-router-dom";

    <Link to="/favorites">My Favorites</Link>
    function Favorites() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
    const favs = getFavorites();
    setMovies(favs);
    }, []);

    return (
    <div>
    <h1>My Favorites</h1>
    <div className="movies-grid">
        {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
    </div>
    );
    }

    export default Favorites;