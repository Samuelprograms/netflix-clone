import React from 'react'
import Movie from './Movie'
import requests from './../Request'
import './../css/Movies.css'

function Movies() {
    return (
        <div className="movies">
            <Movie title="Netflix Originals" data={requests.fetchNetflixOriginals} isBig/>
            <Movie title="Trending Now" data={requests.fetchTrending}/>
            <Movie title="Top Rated" data={requests.fetchTopRated} />
            <Movie title="Action Movies" data={requests.fetchActionMovies} />
            <Movie title="Comedy Movies" data={requests.fetchComedyMovies} />
            <Movie title="Horror Movies" data={requests.fetchHorrorMovies} />
            <Movie title="Romance Movies" data={requests.fetchRomanceMovies} />
            <Movie title="Documentaries" data={requests.fetchDocumentaries} />
        </div>
    )
}

export default Movies
