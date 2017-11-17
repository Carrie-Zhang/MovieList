import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = (props) => (
  <div>
    <ul>
      { props.movies.map((movie, index) => (
      <MovieListEntry key={index} movie={movie} />
      ))}
    </ul>
  </div>
  )

export default MovieList;