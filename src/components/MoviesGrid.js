import React from 'react';
import movies from './Movies.json';
import MovieCard from './MovieCard';
import styles from './MoviesGird.module.css';

function MoviesGrid() {
    
   return (
    <ul className={styles.lista}>
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
    </ul>
   );
}

export default MoviesGrid;