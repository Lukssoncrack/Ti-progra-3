import "./Movie.css"
import { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { mostrarDescripcion: false }; 
  }
  render() {
    const { movie } = this.props; 
     const pelicula = movie.poster_path;  
    const descripcion = movie.overview ? movie.overview : "Sin descripción.";
    let Seriepeli = ""
    if (this.props.type === "tv") {
      Seriepeli = "/series/" + movie.id;
    } else {
      Seriepeli = "/movies/" + movie.id;
    }
    let peliculas = ''
    if (pelicula) {
      peliculas = "https://image.tmdb.org/t/p/w342" + pelicula;
    } else {
      peliculas = "https://via.placeholder.com/342x513?text=Sin+imagen";
    }
      return(
        <div class='item'>
        <img src={peliculas} alt={movie.displayTitle} className="movie-poster" />
        <h3>{movie.displayTitle}</h3>
        <button onClick={() => this.setState({ mostrarDescripcion: !this.state.mostrarDescripcion })}>
        {this.state.mostrarDescripcion ? "Ocultar descripción" : "Ver descripción"}
      </button>

      {this.state.mostrarDescripcion ? <p>{descripcion}</p> : null}
        <Link to={Seriepeli}>Ir a detalle</Link>

      </div>
)
  }
}

export default Movie;