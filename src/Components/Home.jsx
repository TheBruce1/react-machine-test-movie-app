import { useEffect, useState } from "react";

const Home = () => {

    const [movieList, setMovieList] = useState([]);
    const [movieName, setMovieName] = useState([]);
    const [rating, setRating] = useState([]);

    const getMovies = () => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=e999cb3b08d37ac45fd456f2b5c3e3f6")
            .then(response => response.json())
            .then(json => setMovieList(json.results))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <section id="movie">
                <section className="row mx-0 justify-content-center">
                    <div className="col px-0">
                        <div className="row text-center mx-0">
                            {movieList.map((movie) => (
                                <div className="col my-5 px-0">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                                    <p className="text-white">{movie.original_title}</p>
                                     <span className="text-white">Ratings: {movie.vote_average}</span>   
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Home;