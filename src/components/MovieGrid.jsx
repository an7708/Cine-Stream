    function MovieGrid({ movies }) {
    return (
        <div>
        {movies.map((movie) => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
                className="rounded"
            />
            <h2>{movie.title}</h2>
            </div>
        ))}
        </div>
    );
    }

    export default MovieGrid;