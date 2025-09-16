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
    const apiPopular =
    'https://api.themoviedb.org/3/movie/popular?api_key=1d647c75a2cc59b2d409129bc1e32ed0&language=en-US&page=1';

    const apiNowPlaying =
    'https://api.themoviedb.org/3/movie/now_playing?api_key=1d647c75a2cc59b2d409129bc1e32ed0&language=en-US&page=1';
 

  // traemos peliculas populares
    fetch(apiPopular)
      .then( (response)=> response.json())
      .then((data) => {
        if (data.results) {
          this.setState({ popularMovies: data.results });
        }else {
           console.error('No se encuentran películas populares');
        }
        
      })
      .catch((error) => console.log(error));
        
    //traemos peliculaes para la cartelera 
      fetch(apiNowPlaying)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({ nowPlayingMovies: data.results });
        }else{
        console.error('No se encuentran películas en cartelera');
         }
      this.setState({ isLoading: false });
      })
      .catch((error) =>  console.log(error))
    
        this.setState({ isLoading: false });
      ;
  }

  render() {
    const { popularMovies, nowPlayingMovies, isLoading } = this.state;

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
