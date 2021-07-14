import React, {useState, useEffect} from 'react'
import instance from './../Api'
import './../css/Movie.css'

function Movie({title, data, isBig=false}) {

    const [movie, setMovie] = useState([]);
    const picMovieLink = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(data);
            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [data])

    console.log(movie)

    return (
        <div className="movie">
            <h2>{title}</h2>
            <div className="movie__posters">
                {movie.map(movie =>(
                    
                    <img 
                        className={`movie__poster ${isBig && "movie__posterLarge"}`}
                        key={movie.id}
                        src={`${picMovieLink}${
                            isBig ? movie.poster_path : movie.backdrop_path
                    }`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Movie
