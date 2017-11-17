import React from 'react';
import MovieListEntrie from './MovieListEntrie.jsx';

const MovieList = (props) => {

  console.log('in MovieList component props: ', props);

  return (
    <div>
      <ul>
       { props.movies.map(movie => (
        <MovieListEntrie movie={movie} />
      ))}
     </ul>
    </div>
  )
}

export default MovieList;