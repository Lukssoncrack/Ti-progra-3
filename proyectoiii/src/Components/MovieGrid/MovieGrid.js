import React from 'react';
import Movie from "../Movie/Movie";
import './MovieGrid.css'

function MovieGrid({ movies , type}) {
  
  if (!movies) {
    return (
      <div className="results-div">
        <p className="results2">No hay elementos para mostrar</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="results-div">
        <p className="results2">No hay elementos para mostrar</p>
      </div>
    );
  }

  const peliculaseries = [];

  for (let i = 0; i < movies.length; i++) {
    let movieData = {};

    
    movieData.id = movies[i].id;
    movieData.poster_path = movies[i].poster_path;
    movieData.overview = movies[i].overview;
    
    if (movies[i].title) {
      movieData.displayTitle = movies[i].title;
    } else {
      movieData.displayTitle = movies[i].name;
    }

    peliculaseries.push(<Movie movie={movieData} type={type} key={movieData.id} />);
  }

  return (
    <section class='seccion'>
      <div className="movie-grid">
        {peliculaseries}
      </div>
    </section>
  );
}

export default MovieGrid;

