import React, { Component } from 'react';
import MovieGrid from '../Components/MovieGrid/MovieGrid';
import { SearchForm } from '../Components/SearchForm/SearchForm';
import Loading from '../Components/Loading/Loading';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topratedMovies: [],
      nowPlayingMovies: [],
      topratedSeries: [],
      nowPlayingSeries: [],
      isLoading: true,
    };
  }

  componentDidMount() {
   const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    let filtrado = res.results.filter((peli,idx)=> idx <4)
    this.setState({
      topratedMovies:filtrado
    })
  })
  .catch(err => console.error(err));

fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res =>{
    let enfiltrado = res.results.filter((peli,idx)=> idx <4)
     this.setState({
      nowPlayingMovies:enfiltrado
    })
  } )
  .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    let boca = res.results.filter((peli,idx)=> idx <4)
     this.setState({
      topratedSeries:boca
    }) 
  })
  .catch(err => console.error(err));


fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    let juniors = res.results.filter((peli,idx)=> idx <4)
     this.setState({
      nowPlayingSeries:juniors
    }) 
  })
  .catch(err => console.error(err));



  }

  render() {
    

   

    return (
  <>
    <SearchForm history={this.props.history} />

    {this.state.topratedMovies.length === 0 ? (
      <Loading />
    ) : (
      <section>
        <h2>Películas Populares</h2>
        <div className="link-container">
          <Link className="ver-mas" to="/populares">Ver más</Link>
        </div>
        <MovieGrid movies={this.state.topratedMovies} />
      </section>
    )}

    {this.state.nowPlayingMovies.length === 0 ? (
      <Loading />
    ) : (
      <section>
        <h2>Películas en Cartelera</h2>
        <div className="link-container">
          <Link className="ver-mas" to="/cartelera">Ver más</Link>
        </div>
        <MovieGrid movies={this.state.nowPlayingMovies} />
      </section>
    )}

    {this.state.topratedSeries.length === 0 ? (
      <Loading />
    ) : (
      <section>
        <h2>Series Populares</h2>
        <div className="link-container">
          <Link className="ver-mas" to="/series-populares">Ver más</Link>
        </div>
        <MovieGrid movies={this.state.topratedSeries} />
      </section>
    )}

    {this.state.nowPlayingSeries.length === 0 ? (
      <Loading />
    ) : (
      <section>
        <h2>Series en emisión hoy</h2>
        <div className="link-container">
          <Link className="ver-mas" to="/series-hoy">Ver más</Link>
        </div>
        <MovieGrid movies={this.state.nowPlayingSeries} />
      </section>
    )}
  </>    
);     
}        }
export default Home;
