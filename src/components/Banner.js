import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './../css/Banner.css';
import instance from '../Api';
import requests from '../Request';

function Banner() {

    const [movie, setmovie] = useState([]);

    const truncDescription = (string, len) => {
        return string?.length > len ? string.substr(0,len-1)+'...' : string;
    };

    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(requests.fetchNetflixOriginals)
            setmovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);

    return (
        <div
            className="banner" 
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >  
            <div className="banner__contents" >
                <h1 className="banner__title" >
                    {movie?.original_name || movie?.name}
                </h1>
                <h2 className="banner__description">
                    {truncDescription(movie?.overview,150)}
                </h2>
                <div className="banner__buttons">
                    <button className="banner__button banner__button__play" onMo><FontAwesomeIcon className="banner__button__icon" icon={faPlay}/>Play</button>
                    <button className="banner__button banner__button__info"><FontAwesomeIcon className="banner__button__icon" icon={faInfoCircle}/>More Info</button>
                </div>
            </div>
            <div className="banner__fade" />
        </div>
    )
}

export default Banner
