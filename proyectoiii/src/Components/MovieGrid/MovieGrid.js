import React from 'react';
import Movie from "../Movie/Movie";
import "./MovieGrid.css";

function MovieGrid({ movies }) {
  
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

  const movieElements = [];

  for (let i = 0; i < movies.length; i++) {
    let movieData = {};

    
    movieData.id = movies[i].id;
    movieData.poster_path = movies[i].poster_path;

    
    if (movies[i].title) {
      movieData.displayTitle = movies[i].title;
    } else {
      movieData.displayTitle = movies[i].name;
    }

    movieElements.push(<Movie movie={movieData} key={movieData.id} />);
  }

  return (
    <section>
      <div className="movie-grid">
        {movieElements}
      </div>
    </section>
  );
}

export default MovieGrid;

