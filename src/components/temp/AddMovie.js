import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);    

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        let id = Math.max.apply(Math, movies.map(function(o) { 
            return o.id + 1; 
        }))

        setMovies(prevMovies => [...prevMovies, {id: id, name: name, price: price}]);
    }

    return (
        <form onSubmit={addMovie}>
           <input type="text" name="name" value={name} onChange={updateName}/>
           <input 
                type="text" 
                name="price" 
                value={price} 
                onChange={updatePrice}
            />

            <button>Submit</button>
        </form>
    );
}

export default AddMovie;