import { useEffect, useState } from "react";

const TopRated = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getToprated = () => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=e999cb3b08d37ac45fd456f2b5c3e3f6")
            .then(response => response.json())
            .then(json => setTopMovies(json.results))
    }

    useEffect(() => {
        getToprated()
    }, [])

    return (
        <>
            <section id="top-rated">
                <div className="row mx-0 justify-content-center">
                    <div className="col px-0">
                        <div className="row text-center mx-0">
                            {topMovies.map((movie) => (
                                <div className="col my-5 px-0">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <p className="text-white">{movie.original_title}</p>
                                    <span className="text-white">Ratings: {movie.vote_average}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TopRated;