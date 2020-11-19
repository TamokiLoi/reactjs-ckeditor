import React, { useState } from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 1
        },
        {
            name: 'Game of Thrones',
            price: '$10',
            id: 2
        },
        {
            name: 'Inception',
            price: '$10',
            id: 3
        }
    ]);
    return (
        <>
            {
                movies.map(movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                ))
            }
        </>
    );
}

export default MovieList;