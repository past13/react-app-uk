import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Deadpool",
            price: "10$"
        },
        {
            id: 2,
            name: "Gladiator",
            price: "11$"
        },
        {
            id: 3,
            name: "Star Trek",
            price: "14$"
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}