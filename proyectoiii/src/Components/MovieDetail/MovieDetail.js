import { Component } from "react";
import "./MovieDetail.css";
import Loading from '../Loading/Loading';
import { FaHeart } from "react-icons/fa";



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDY0N2M3NWEyY2M1OWIyZDQwOTEyOWJjMWUzMmVkMCIsIm5iZiI6MTc1NzYyMDI1OC43MjIsInN1YiI6IjY4YzMyODIyODQyMzZiOTYxNmEyNmFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MvaKrJXB17B36yie7BVCiQwXMd3zm9sSohxkS27hiWE'
  }}

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isLoading: true
    }; 
  }

 
componentDidMount() {
const movieId = this.props.match.params.movieId;
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, options)
       .then(function (response) {    
          return response.json();
       })
        .then((data) => {
        this.setState({ movie: data, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }


render() {
    const movie = this.state.movie;
    const isLoading = this.state.isLoading;
    const error = this.state.error;
    const favorito = this.state.favorito;
    if (isLoading) return <Loading />;
    if (!movie) return <p>No se encontro la pelicula</p>;

    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
     const release_date = movie.release_date;
     const runtime = movie.runtime;
      const overview = movie.overview;
      const genres = movie.genres;
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : "https://via.placeholder.com/500x750?text=Sin+imagen";

    return (
      <section className="movie-detail">
        <h2>{title}</h2>
        <img src={poster} alt={title} />
        <p>Calificación:{vote_average} / 10</p>
        <p>Fecha de estreno: {release_date}</p>
        <p>Duración: {runtime} minutos</p>
        <p>Sinopsis:{overview}</p>
        <p>Género:</p>
        <ul>
            {genres.map(function(genero){
              return <li key={genero.id}>{genero.name}</li>;
            })}
          </ul>
        <button
          onClick={() =>
            favorito ? this.quitarFavorito() : this.agregarFavorito()
          }
        >
          {favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </section>
    );
  }

}
export default MovieDetail;