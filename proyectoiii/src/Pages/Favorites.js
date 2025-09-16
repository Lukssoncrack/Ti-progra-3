import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import Loading from '../Components/Loading/Loading';

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies: [],
      favoriteSeries: [],
      isLoading: true
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('favoritos');
    const parsedArray = JSON.parse(storage) || []; // Si localStorage está vacío

    const movieIds = parsedArray
      .filter(item => item.type === 'movie')
      .map(item => item.id);

    const seriesIds = parsedArray
      .filter(item => item.type === 'series')
      .map(item => item.id);

    const moviesPromise = Promise.all(
      movieIds.map(id =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=1d647c75a2cc59b2d409129bc1e32ed0&language=en-US&page=1`
        )
          .then(res => res.json())
          .catch(() => null)
      )
    );

    const seriesPromise = Promise.all(
      seriesIds.map(id =>
        fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=1d647c75a2cc59b2d409129bc1e32ed0&language=en-US&page=1`
        )
          .then(res => res.json())
          .catch(() => null)
      )
    );

    Promise.all([moviesPromise, seriesPromise]).then(([movies, series]) => {
      this.setState({
        favoriteMovies: movies.filter(m => m !== null),
        favoriteSeries: series.filter(s => s !== null),
        isLoading: false
      });
    });
  }

  render() {
    const { favoriteMovies, favoriteSeries, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    // Ver si no hay favoritos
    if (favoriteMovies.length === 0) {
      if (favoriteSeries.length === 0) {
        return (
          <div className='results-div'>
            <p className="results2">No tienes favoritos</p>
          </div>
        );
      }
    }

    const sections = [];

    if (favoriteMovies.length > 0) {
      sections.push(
        <section key="movies">
          <h2>Películas Favoritas</h2>
          <div className="link-container">
            <p className="ver-mas">Ver más películas</p>
          </div>
          <MovieGrid movies={favoriteMovies} />
        </section>
      );
    }

    if (favoriteSeries.length > 0) {
      sections.push(
        <section key="series">
          <h2>Series Favoritas</h2>
          <div className="link-container">
            <p className="ver-mas">Ver más series</p>
          </div>
          <MovieGrid movies={favoriteSeries} />
        </section>
      );
    }

    return <div>{sections}</div>;
  }
}

export default Favoritos;
