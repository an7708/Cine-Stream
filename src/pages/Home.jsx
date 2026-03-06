    import { useEffect, useState } from "react";

    import { loadMovies, searchMovies } from "../api/api";

    import MovieCard from "../components/MovieCard";
    import SearchBar from "../components/SearchBar";
    import MoodMatcher from "../components/MoodMatcher";
    import Navbar from "../components/Navbar";
    import useDebounce from "../hooks/useDebounce";

    function Home() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const debouncedQuery = useDebounce(query, 500);

    // Fetch Popular Movies
    const fetchMovies = async () => {
        setLoading(true);
        try {
        const data = await loadMovies();
            console.log(data);
            setMovies(data.results);
        } catch (error) {
        console.error("Error fetching movies:", error);
        }
        setLoading(false);
    };

    // Initial Load
    useEffect(() => {
        fetchMovies();
    }, []);

    // Search Movies
    useEffect(() => {

        const searchMoviesAPI = async () => {

        if (debouncedQuery.trim() === "") {
            fetchMovies();
            return;
        }

        try {
            const data = await searchMovies(debouncedQuery);
            setMovies(data.results);
        } catch (error) {
            console.error("Search error:", error);
        }
        };

        searchMoviesAPI();

    }, [debouncedQuery]);

    // Mood Matcher
    const handleMoodMovie = async (title) => {
        try {
        const data = await searchMovies(title);
        setMovies(data.results);
        } catch (error) {
        console.error("Mood search error:", error);
        }
    };

    return (
        <div>
            <Navbar/>

            <div className="search-section">
            <SearchBar query={query} setQuery={setQuery}/>
            <MoodMatcher onMovieFound={handleMoodMovie}/>
            </div>

            <div className="movies-section">
            <h2>Popular Movies</h2>

            <div className="movies-grid">
            {movies.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
            ))}
            </div>
            </div>
                {loading && (
                <p className="loading">Loading movies...</p>
                )}
            </div>
    );
    }

    export default Home;