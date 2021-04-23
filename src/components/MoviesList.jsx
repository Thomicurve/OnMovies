import React from 'react';

import '../styles/list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function MoviesList(props) {

    return (
        <div className="movies-list">
            {props.movieList.map(res => {
                return (
                    <div className="card-movie" key={res.imdbID}>
                        <img src={res.Poster} className="m-5 text-light"  alt={`Poster of ${res.Title}`} />
                        <div className="movie-content d-flex">
                            <div className="text-movie">
                                <h5 className="text-warning movie-title">{res.Title}</h5>
                                <p className="text-light">Year: {res.Year}</p>
                            </div>
                            <div className="eye-icon">
                                <FontAwesomeIcon className="text-warning icon-eye" icon={faEye}></FontAwesomeIcon>
                            </div>
                            
                        </div>
                    </div>
                )
            })}     
        </div>
    )
}

export default MoviesList;