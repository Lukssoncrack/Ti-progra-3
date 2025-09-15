import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import { SearchForm } from '../Components/SearchForm/SearchForm';
import Loading from '../Components/Loading/Loading';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: [],
      nowPlayingMovies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    let apiPopular =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

let apiNowPlaying =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
 
    fetch(apiPopular)
      .then(function (response) { return response.json(); })
      .then((data) => {
        if (data && data.results) {
          this.setState({ popularMovies: data.results });
        }
      })
      .catch(function (error) { console.log(error); })

      .then(() => fetch(apiNowPlaying))
      .then(function (response) { return response.json(); })
      .then((data) => {
        if (data && data.results) {
          this.setState({ nowPlayingMovies: data.results });
        }
      })
      .catch(function (error) { console.log(error); })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    let { popularMovies, nowPlayingMovies, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <>
        <SearchForm history={this.props.history} />

        <section>
          <h2>Películas Populares</h2>
          <div className="link-container">
            <Link className="ver-mas" to="/populares">Ver más</Link>
          </div>
          <MovieGrid movies={popularMovies.slice(0, 5)} />
        </section>

        <section>
          <h2>Películas en Cartelera</h2>
          <div className="link-container">
            <Link className="ver-mas" to="/cartelera">Ver más</Link>
          </div>
          <MovieGrid movies={nowPlayingMovies.slice(0, 5)} />
        </section>
      </>
    );
  }
}

export default Home;
