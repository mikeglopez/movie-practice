import React from 'react';
import Movie from './Movie.jsx';

const MovieList = (props) => {
  return (
  <table cellSpacing="0">
    <tbody>
      {props.movies.map((movie) => {
        return <Movie key={props.movies.indexOf(movie)} title={movie.title} />
      })}
    </tbody>
  </table>
  );
}

export default MovieList;