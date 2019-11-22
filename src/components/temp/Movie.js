import React from 'react';

const Movie = ({movie}) => {
    return (
        <div>
            <div>{movie.id}</div>
            <div>{movie.name}</div>
            <div>{movie.price}</div>
        </div>
    );
}

export default Movie;