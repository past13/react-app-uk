import React, { useContext} from 'react';
import { MovieContext } from './MovieContext';
import Movie from './Movie';

const MovieList = () => {
    const [movies] = useContext(MovieContext);
    
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie}/>
            ))}
        </div>
    );
}

export default MovieList;