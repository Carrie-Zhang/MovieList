import React from 'react';

const MovieListEntry = (props) => {
  console.log(props);

  return (
  <li>{ props.movie.title }</li>
  )
}


export default MovieListEntry;